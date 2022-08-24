using System;
using System.Collections.Generic;

namespace mysqlconnection.Models
{
    public partial class Location
    {
        public Location()
        {
            WalkIns = new HashSet<WalkIn>();
        }

        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public DateTime CreatedDate { get; set; }
        public DateTime ModifiedDate { get; set; }

        public virtual ICollection<WalkIn> WalkIns { get; set; }
    }
}
