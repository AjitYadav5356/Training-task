using System;
using System.Collections.Generic;

namespace mysqlconnection.Models
{
    public partial class InternshipOpportunity
    {
        public int Id { get; set; }
        public sbyte Available { get; set; }
        public string? Title { get; set; }
        public int WalkInId { get; set; }

        public virtual WalkIn WalkIn { get; set; } = null!;
    }
}
