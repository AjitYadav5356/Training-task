using System;
using System.Collections.Generic;

namespace mysqlconnection.Models
{
    public partial class Application
    {
        public Application()
        {
            JobRoles = new HashSet<JobRole>();
        }

        public int Id { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime ModifiedDate { get; set; }
        public int TimeSlotId { get; set; }

        public virtual TimeSlot TimeSlot { get; set; } = null!;

        public virtual ICollection<JobRole> JobRoles { get; set; }
    }
}
