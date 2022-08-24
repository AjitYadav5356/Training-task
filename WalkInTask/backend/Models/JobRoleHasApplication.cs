using System;
using System.Collections.Generic;

namespace mysqlconnection.Models
{
    public partial class JobRoleHasApplication
    {
        public int JobRoleId { get; set; }
        public int ApplicationsId { get; set; }

        public virtual JobRole JobRole { get; set; } = null!;
    }
}
