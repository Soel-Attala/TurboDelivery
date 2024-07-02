using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using TurboDelivery.Entities.Database;
using TurboDelivery.Entities.Models;
using TurboDelivery.Business.DTOs;

namespace TurboDelivery.Business.Services
{
    public class AuthService
    {
        private readonly TurboDbContext _dbContext;
        private readonly IConfiguration _configuration;

        public AuthService(TurboDbContext dbContext, IConfiguration configuration)
        {
            _dbContext = dbContext;
            _configuration = configuration;
        }

        public async Task<string> AuthenticateUser(LoginDTO loginDTO)
        {
            try
            {
                var user = await _dbContext.Users.FirstOrDefaultAsync(u => u.Username == loginDTO.Username);

                if (user == null || !VerifyPasswordHash(loginDTO.Password, user.Password))
                {
                    return null;
                }

                return GenerateJwtToken(user);
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to authenticate user", ex);
            }
        }

        private bool VerifyPasswordHash(string password, string storedHash)
        {
            // Implementa lógica real de verificación de contraseña
            return password == storedHash;
        }

        private string GenerateJwtToken(User user)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_configuration["Jwt:Secret"]);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                    new Claim(ClaimTypes.Name, user.Username),
                    // Agregar otros claims según sea necesario
                }),
                Expires = DateTime.UtcNow.AddDays(1),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}

