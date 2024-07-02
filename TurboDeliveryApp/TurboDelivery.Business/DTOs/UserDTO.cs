using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TurboDelivery.Business.DTOs
{

    public class UserDTO
    {
        public int Id { get; set; }
        public string Username { get; set; } = null!;
        public string? Email { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? LocalName { get; set; }
        public string? LocalType { get; set; }
        public string Address { get; set; } = null!;
        public string PhoneNumber { get; set; } = null!;
        public string? Role { get; set; }
        public DateTime? CreatedAt { get; set; }
    }
}