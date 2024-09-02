using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using TurboDelivery.Business.Services;
using TurboDelivery.Entities.Models;

namespace TurboDeliveryAppWeb.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserOrderController : ControllerBase
    {
        private readonly UserOrderService _userOrderService;

        public UserOrderController(UserOrderService userOrderService)
        {
            _userOrderService = userOrderService;
        }

        [HttpPost("/CreateRelationship")]
        public async Task<IActionResult> CreateRelationship([FromBody] UserOrder userOrder)
        {
            try
            {
                var result = await _userOrderService.CreateRelationship(userOrder);

                if (result != null)
                {
                    // Retorna una respuesta creada si el resultado es exitoso
                    return CreatedAtAction(nameof(GetAllRelationships), new { id = result.Id }, new { message = "Relationship created successfully", relationshipId = result.Id });
                }
                else
                {
                    return BadRequest(new { message = "Failed to create relationship" });
                }
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = $"No se pudo crear la relación: {ex.Message}" });
            }
        }

        [HttpPut("UpdateRelationship/{id}")]
        public async Task<IActionResult> UpdateRelationship(int id, [FromBody] UserOrder updatedUserOrder)
        {
            try
            {
                var result = await _userOrderService.UpdateRelationship(id, updatedUserOrder);

                if (result)
                {
                    return Ok(new { message = "Relationship updated successfully" });
                }
                else
                {
                    return NotFound(new { message = "Relationship with the specified id not found" });
                }
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = $"No se pudo actualizar la relación: {ex.Message}" });
            }
        }

        [HttpDelete("/DeleteRelationship/{id}")]
        public async Task<IActionResult> DeleteRelationship(int id)
        {
            try
            {
                var result = await _userOrderService.DeleteRelationship(id);

                if (result)
                {
                    return Ok(new { message = "Relationship deleted successfully" });
                }
                else
                {
                    return NotFound(new { message = "Relationship not found" });
                }
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = $"No se pudo eliminar la relación: {ex.Message}" });
            }
        }

        [HttpGet("GetAllRelationships/{id}")]
        public IActionResult GetAllRelationships()
        {
            try
            {
                var relationships = _userOrderService.GetAllRelationships();
                return Ok(relationships);
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = $"No se pudo obtener la lista de relaciones: {ex.Message}" });
            }
        }

        [HttpGet("GetRelationshipsByClientId/{clientId}")]
        public IActionResult GetRelationshipsByClientId(int clientId)
        {
            try
            {
                var relationships = _userOrderService.GetRelationshipsByClientId(clientId);
                return Ok(relationships);
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = $"No se pudo obtener las relaciones del cliente: {ex.Message}" });
            }
        }

        [HttpGet("GetRelationshipsByEmployeeId/{employeeId}")]
        public IActionResult GetRelationshipsByEmployeeId(int employeeId)
        {
            try
            {
                var relationships = _userOrderService.GetRelationshipsByEmployeeId(employeeId);
                return Ok(relationships);
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = $"No se pudo obtener las relaciones del empleado: {ex.Message}" });
            }
        }
    }
}

