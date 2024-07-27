using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using TurboDelivery.Business.Services;
using TurboDelivery.Entities.Models;

namespace TurboDeliveryAppWeb.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OrderController : ControllerBase
    {
        private readonly OrderService _orderService;

        public OrderController(OrderService orderService)
        {
            _orderService = orderService;
        }

        [HttpPost("CreateOrder")]
        public async Task<IActionResult> CreateOrder([FromBody] Order order)
        {
            try
            {
                var createdOrder = await _orderService.CreateOrder(order);
                return CreatedAtAction(nameof(GetOrderById), new { id = createdOrder.Id }, createdOrder);
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        [HttpPut("UpdateOrder/{id}")]
        public async Task<IActionResult> UpdateOrder(int id, [FromBody] Order updatedOrder)
        {
            try
            {
                var result = await _orderService.UpdateOrder(id, updatedOrder);
                if (result)
                {
                    return Ok(new { message = "Order updated successfully" });
                }
                else
                {
                    return NotFound(new { message = $"Order with id {id} not found" });
                }
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        [HttpDelete("DeleteOrder/{id}")]
        public async Task<IActionResult> DeleteOrder(int id)
        {
            try
            {
                var result = await _orderService.DeleteOrder(id);
                if (result)
                {
                    return Ok(new { message = "Order deleted successfully" });
                }
                else
                {
                    return NotFound(new { message = $"Order with id {id} not found" });
                }
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        [HttpGet("GetOrders")]
        public IActionResult GetOrders()
        {
            var orders = _orderService.GetOrders();
            return Ok(orders);
        }

        [HttpGet("GetOrderById/{id}")]
        public IActionResult GetOrderById(int id)
        {
            var order = _orderService.GetOrderById(id);
            if (order != null)
            {
                return Ok(order);
            }
            else
            {
                return NotFound(new { message = $"Order with id {id} not found" });
            }
        }
    }
}

