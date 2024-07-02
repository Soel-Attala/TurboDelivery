using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TurboDelivery.Entities.Database;
using TurboDelivery.Entities.Models;

namespace TurboDelivery.Business.Services
{
    public class UserService
    {
        private readonly TurboDbContext _dbContext;

        public UserService(TurboDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<string> GetName(int userId)
        {
            try
            {
                var user = await _dbContext.Users.FindAsync(userId);
                return user?.FirstName;
            }
            catch (Exception ex)
            {
                // Log ex.Message si necesitas detalles del error
                return "User not found";
            }
        }

        public User GetUserById(int id)
        {
            return _dbContext.Users.Find(id);
        }

        public async Task<User> CreateUser(User user)
        {
            try
            {
                _dbContext.Users.Add(user);
                await _dbContext.SaveChangesAsync();
                return user;
            }
            catch (DbUpdateException)
            {
                throw new Exception("No se pudo crear el usuario");
            }
        }

        public async Task<bool> EditUserById(int id, User updatedUserData)
        {
            try
            {
                var existingUser = await _dbContext.Users.FindAsync(id);

                if (existingUser == null)
                {
                    return false;
                }

                existingUser.Username = updatedUserData.Username;
                existingUser.Password = updatedUserData.Password;
                existingUser.Email = updatedUserData.Email;
                existingUser.FirstName = updatedUserData.FirstName;
                existingUser.LastName = updatedUserData.LastName;

                await _dbContext.SaveChangesAsync();

                return true;
            }
            catch (DbUpdateException)
            {
                throw new Exception($"No se pudo actualizar el usuario con id {id}");
            }
        }

        public List<User> GetUsersList()
        {
            return _dbContext.Users.ToList();
        }

        public async Task<bool> DeleteUserById(int id)
        {
            try
            {
                var user = await _dbContext.Users.FindAsync(id);

                if (user != null)
                {
                    _dbContext.Users.Remove(user);
                    await _dbContext.SaveChangesAsync();
                    return true;
                }
                else
                {
                    return false;
                }
            }
            catch (DbUpdateException)
            {
                throw new Exception($"No se pudo eliminar el usuario con id {id}");
            }
        }
    }
}
