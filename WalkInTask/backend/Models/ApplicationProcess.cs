using System;
using System.Collections.Generic;

namespace mysqlconnection.Models
{
    public partial class ApplicationProcess
    {
        public int Id { get; set; }
        public string GeneralInstructions { get; set; } = null!;
        public string ExamInstructions { get; set; } = null!;
        public string SystemRequirements { get; set; } = null!;
        public string Process { get; set; } = null!;
        public int WalkInId { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime ModifiedDate { get; set; }

        public virtual WalkIn WalkIn { get; set; } = null!;
    }
}
