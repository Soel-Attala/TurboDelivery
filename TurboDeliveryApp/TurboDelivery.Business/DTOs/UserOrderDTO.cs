using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TurboDelivery.Business.DTOs
{
    public class UserOrderDTO
    {
        public int Id { get; set; }
        public int ClientId { get; set; }
        public int EmployeeId { get; set; }
        public int OrderId { get; set; }
        public DateTime? CreatedAt { get; set; }
    }
}