using System;
using System.Collections.Generic;

namespace TurboDelivery.Entities.Models;

public partial class Order
{
    public int Id { get; set; }

    public string Address { get; set; } = null!;

    public string Description { get; set; } = null!;

    public int DeliveryCost { get; set; }

    public int SalePrice { get; set; }

    public bool? Finished { get; set; }

    public DateTime? CreatedAt { get; set; }
}
