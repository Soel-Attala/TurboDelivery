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
    public class OrderService
    {
        private readonly TurboDbContext _dbContext;

        public OrderService(TurboDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<Order> CreateOrder(Order order)
        {
            try
            {
                _dbContext.Orders.Add(order);
                await _dbContext.SaveChangesAsync();
                return order;
            }
            catch (DbUpdateException)
            {
                throw new Exception("No se pudo crear la orden");
            }
        }

        public async Task<bool> UpdateOrder(int id, Order updatedOrder)
        {
            try
            {
                var existingOrder = await _dbContext.Orders.FindAsync(id);

                if (existingOrder == null)
                {
                    return false;
                }

                existingOrder.Address = updatedOrder.Address;
                existingOrder.Description = updatedOrder.Description;
                existingOrder.DeliveryCost = updatedOrder.DeliveryCost;
                existingOrder.SalePrice = updatedOrder.SalePrice;
                existingOrder.Finished = updatedOrder.Finished;

                await _dbContext.SaveChangesAsync();

                return true;
            }
            catch (DbUpdateException)
            {
                throw new Exception($"No se pudo actualizar la orden con id {id}");
            }
        }

        public async Task<bool> DeleteOrder(int id)
        {
            try
            {
                var order = await _dbContext.Orders.FindAsync(id);

                if (order != null)
                {
                    _dbContext.Orders.Remove(order);
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
                throw new Exception($"No se pudo eliminar la orden con id {id}");
            }
        }

        public List<Order> GetOrders()
        {
            return _dbContext.Orders.ToList();
        }

        public Order GetOrderById(int id)
        {
            return _dbContext.Orders.Find(id);
        }
    }
}
