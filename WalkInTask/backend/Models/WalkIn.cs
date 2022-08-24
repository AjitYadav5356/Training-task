using System;
using System.Collections.Generic;

namespace mysqlconnection.Models
{
    public partial class WalkIn
    {
        public WalkIn()
        {
            ApplicationProcesses = new HashSet<ApplicationProcess>();
            InternshipOpportunities = new HashSet<InternshipOpportunity>();
            TimeSlots = new HashSet<TimeSlot>();
            JobRoles = new HashSet<JobRole>();
        }

        public int Id { get; set; }
        public string Title { get; set; } = null!;
        public string StartDate { get; set; } = null!;
        public string EndDate { get; set; } = null!;
        public DateTime CreatedDate { get; set; }
        public DateTime ModifiedDate { get; set; }
        public int LocationId { get; set; }

        public virtual Location Location { get; set; } = null!;
        public virtual ICollection<ApplicationProcess> ApplicationProcesses { get; set; }
        public virtual ICollection<InternshipOpportunity> InternshipOpportunities { get; set; }
        public virtual ICollection<TimeSlot> TimeSlots { get; set; }

        public virtual ICollection<JobRole> JobRoles { get; set; }
    }
}
