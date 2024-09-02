using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TurboDelivery.Business.DTOs;
using TurboDelivery.Business.Services;
using TurboDelivery.Entities.Models;

namespace TurboDeliveryAppWeb.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly UserService _userService;

        public UserController(UserService userService)
        {
            _userService = userService;
        }

        [HttpGet("GetName/{id}")]
        public async Task<IActionResult> GetUserName(int id)
        {
            var userName = await _userService.GetName(id);

            if (userName != null)
            {
                return Ok(new { UserName = userName });
            }
            else
            {
                return NotFound(new { message = "User not found" });
            }
        }

        [HttpPost("CreateUser")]
        public async Task<IActionResult> CreateUser([FromBody] User user)
        {
            try
            {
                var result = await _userService.CreateUser(user);

                if (result != null)
                {
                    return CreatedAtAction(nameof(GetUserById), new { id = result.Id }, new { message = "User created successfully", userId = result.Id });
                }
                else
                {
                    return BadRequest(new { message = "Failed to create user" });
                }
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = $"No se pudo crear el usuario: {ex.Message}" });
            }
        }

        [HttpGet("UserList")]
        public IActionResult GetUsersList()
        {
            try
            {
                var usersList = _userService.GetUsersList();
                return Ok(usersList);
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = $"No se pudo obtener la lista de usuarios: {ex.Message}" });
            }
        }

        [HttpGet("GetUser{id}")]
        public IActionResult GetUserById(int id)
        {
            try
            {
                var user = _userService.GetUserById(id);

                if (user != null)
                {
                    return Ok(user);
                }
                else
                {
                    return NotFound(new { message = "User not found" });
                }
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = $"No se pudo obtener el usuario: {ex.Message}" });
            }
        }

        [HttpPut("EditUser/{id}")]
        public async Task<IActionResult> EditUser(int id, [FromBody] User updatedUserData)
        {
            try
            {
                if (id > 0)
                {
                    var result = await _userService.EditUserById(id, updatedUserData);

                    if (result)
                    {
                        return Ok(new { message = "User data updated successfully" });
                    }
                    else
                    {
                        return NotFound(new { message = "User with the specified id not found" });
                    }
                }
                else
                {
                    return BadRequest(new { message = "Invalid user id" });
                }
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = $"No se pudo actualizar el usuario: {ex.Message}" });
            }
        }

        [HttpDelete("DeleteUser/{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            try
            {
                var result = await _userService.DeleteUserById(id);

                if (result)
                {
                    return Ok(new { message = "User deleted successfully" });
                }
                else
                {
                    return NotFound(new { message = "User not found" });
                }
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = $"No se pudo eliminar el usuario: {ex.Message}" });
            }
        }
    }
}
