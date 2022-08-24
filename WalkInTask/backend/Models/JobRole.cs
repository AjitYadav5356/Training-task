using System;
using System.Collections.Generic;

namespace mysqlconnection.Models
{
    public partial class JobRole
    {
        public JobRole()
        {
            Applications = new HashSet<Application>();
            WalkIns = new HashSet<WalkIn>();
        }

        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public string Compensation { get; set; } = null!;
        public string Description { get; set; } = null!;
        public string Requirements { get; set; } = null!;
        public DateTime CreatedDate { get; set; }
        public DateTime ModifiedDate { get; set; }

        public virtual ICollection<Application> Applications { get; set; }
        public virtual ICollection<WalkIn> WalkIns { get; set; }
    }
}
