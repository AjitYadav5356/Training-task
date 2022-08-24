using System;
using System.Collections.Generic;

namespace mysqlconnection.Models
{
    public partial class TimeSlot
    {
        public TimeSlot()
        {
            Applications = new HashSet<Application>();
        }

        public int Id { get; set; }
        public TimeOnly StartTime { get; set; }
        public TimeOnly EndTime { get; set; }
        public int WalkInId { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime ModifiedDate { get; set; }

        public virtual WalkIn WalkIn { get; set; } = null!;
        public virtual ICollection<Application> Applications { get; set; }
    }
}
