using System;
using System.Collections.Generic;

namespace mysqlconnection.Models
{
    public partial class Hallticket
    {
        public int Id { get; set; }
        public string Title { get; set; } = null!;
        public DateTime DateTime { get; set; }
        public string Vanue { get; set; } = null!;
        public string ThingsToRemeber { get; set; } = null!;
        public DateTime CreatedDate { get; set; }
        public DateTime ModifiedDate { get; set; }
    }
}
