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
    public class UserOrderService
    {
        private readonly TurboDbContext _dbContext;

        public UserOrderService(TurboDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<UserOrder> CreateRelationship(UserOrder userOrder)
        {
            try
            {
                _dbContext.UserOrders.Add(userOrder);
                await _dbContext.SaveChangesAsync();
                return userOrder;
            }
            catch (DbUpdateException)
            {
                throw new Exception("No se pudo crear la relación entre usuario y orden");
            }
        }

        public async Task<bool> UpdateRelationship(int id, UserOrder updatedUserOrder)
        {
            try
            {
                var existingRelationship = await _dbContext.UserOrders.FindAsync(id);

                if (existingRelationship == null)
                {
                    return false;
                }

                existingRelationship.ClientId = updatedUserOrder.ClientId;
                existingRelationship.EmployeeId = updatedUserOrder.EmployeeId;
                existingRelationship.OrderId = updatedUserOrder.OrderId;

                await _dbContext.SaveChangesAsync();

                return true;
            }
            catch (DbUpdateException)
            {
                throw new Exception($"No se pudo actualizar la relación con id {id}");
            }
        }

        public async Task<bool> DeleteRelationship(int id)
        {
            try
            {
                var relationship = await _dbContext.UserOrders.FindAsync(id);

                if (relationship != null)
                {
                    _dbContext.UserOrders.Remove(relationship);
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
                throw new Exception($"No se pudo eliminar la relación con id {id}");
            }
        }

        public List<UserOrder> GetAllRelationships()
        {
            return _dbContext.UserOrders.ToList();
        }

        public List<UserOrder> GetRelationshipsByClientId(int clientId)
        {
            return _dbContext.UserOrders.Where(uo => uo.ClientId == clientId).ToList();
        }

        public List<UserOrder> GetRelationshipsByEmployeeId(int employeeId)
        {
            return _dbContext.UserOrders.Where(uo => uo.EmployeeId == employeeId).ToList();
        }
    }
}
