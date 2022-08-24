using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace mysqlconnection.Models
{
    public partial class User
    {
        
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        
        public int Id { get; set; }
        public string? EmailId { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Phone { get; set; }
        public string? Resume { get; set; }
        public string? Portfolio { get; set; }
        public string? PreferedJob { get; set; }
        public float? Percentage { get; set; }
        public int? PassingYear { get; set; }
        public string? Qualification { get; set; }
        public string? Stream { get; set; }
        public string? College { get; set; }
        public string? CollegeLocation { get; set; }
        public string? AplicantType { get; set; }
        public int? YearOfExperience { get; set; }
        public int? CurrentCtc { get; set; }
        public int? ExpectedCtc { get; set; }
        public string? Tech { get; set; }
        public string? NoticePeriod { get; set; }
        public string? AppearedZeus { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? ModifiedDate { get; set; }
    }
}
