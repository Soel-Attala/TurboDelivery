using System;
using System.Collections.Generic;

namespace TurboDelivery.Entities.Models;

public partial class UserOrder
{
    public int Id { get; set; }

    public int ClientId { get; set; }

    public int EmployeeId { get; set; }

    public int OrderId { get; set; }

    public DateTime? CreatedAt { get; set; }
}
