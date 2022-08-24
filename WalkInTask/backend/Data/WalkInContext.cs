using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using mysqlconnection.Models;

namespace mysqlconnection.Data
{
    public partial class WalkInContext : DbContext
    {
        public WalkInContext()
        {
        }

        public WalkInContext(DbContextOptions<WalkInContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Application> Applications { get; set; } = null!;
        public virtual DbSet<ApplicationProcess> ApplicationProcesses { get; set; } = null!;
        public virtual DbSet<Hallticket> Halltickets { get; set; } = null!;
        public virtual DbSet<InternshipOpportunity> InternshipOpportunities { get; set; } = null!;
        public virtual DbSet<JobRole> JobRoles { get; set; } = null!;
        public virtual DbSet<Location> Locations { get; set; } = null!;
        public virtual DbSet<TimeSlot> TimeSlots { get; set; } = null!;
        public virtual DbSet<User> Users { get; set; } = null!;
        public virtual DbSet<WalkIn> WalkIns { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.UseCollation("utf8_general_ci")
                .HasCharSet("utf8mb3");

            modelBuilder.Entity<Application>(entity =>
            {
                entity.ToTable("applications");

                entity.HasIndex(e => e.TimeSlotId, "fk_applications_time_Slot1_idx");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.CreatedDate)
                    .HasColumnType("datetime")
                    .HasColumnName("created_date")
                    .HasDefaultValueSql("CURRENT_TIMESTAMP");

                entity.Property(e => e.ModifiedDate)
                    .HasColumnType("datetime")
                    .ValueGeneratedOnAddOrUpdate()
                    .HasColumnName("modified_date")
                    .HasDefaultValueSql("CURRENT_TIMESTAMP");

                entity.Property(e => e.TimeSlotId).HasColumnName("time_Slot_id");

                entity.HasOne(d => d.TimeSlot)
                    .WithMany(p => p.Applications)
                    .HasForeignKey(d => d.TimeSlotId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_applications_time_Slot1");
            });

            modelBuilder.Entity<ApplicationProcess>(entity =>
            {
                entity.HasKey(e => new { e.Id, e.WalkInId })
                    .HasName("PRIMARY")
                    .HasAnnotation("MySql:IndexPrefixLength", new[] { 0, 0 });

                entity.ToTable("application_process");

                entity.HasIndex(e => e.WalkInId, "fk_application_process_walk_in1_idx");

                entity.Property(e => e.Id)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("id");

                entity.Property(e => e.WalkInId).HasColumnName("walk_in_id");

                entity.Property(e => e.CreatedDate)
                    .HasColumnType("datetime")
                    .HasColumnName("created_date")
                    .HasDefaultValueSql("CURRENT_TIMESTAMP");

                entity.Property(e => e.ExamInstructions)
                    .HasColumnType("text")
                    .HasColumnName("exam_instructions");

                entity.Property(e => e.GeneralInstructions)
                    .HasColumnType("text")
                    .HasColumnName("general_instructions");

                entity.Property(e => e.ModifiedDate)
                    .HasColumnType("datetime")
                    .ValueGeneratedOnAddOrUpdate()
                    .HasColumnName("modified_date")
                    .HasDefaultValueSql("CURRENT_TIMESTAMP");

                entity.Property(e => e.Process)
                    .HasColumnType("text")
                    .HasColumnName("process");

                entity.Property(e => e.SystemRequirements)
                    .HasColumnType("text")
                    .HasColumnName("system_requirements");

                entity.HasOne(d => d.WalkIn)
                    .WithMany(p => p.ApplicationProcesses)
                    .HasForeignKey(d => d.WalkInId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_application_process_walk_in1");
            });

            modelBuilder.Entity<Hallticket>(entity =>
            {
                entity.ToTable("hallticket");

                entity.Property(e => e.Id)
                    .ValueGeneratedNever()
                    .HasColumnName("id");

                entity.Property(e => e.CreatedDate)
                    .HasColumnType("datetime")
                    .HasColumnName("created_date")
                    .HasDefaultValueSql("CURRENT_TIMESTAMP");

                entity.Property(e => e.DateTime)
                    .HasColumnType("datetime")
                    .HasColumnName("date_time");

                entity.Property(e => e.ModifiedDate)
                    .HasColumnType("datetime")
                    .ValueGeneratedOnAddOrUpdate()
                    .HasColumnName("modified_date")
                    .HasDefaultValueSql("CURRENT_TIMESTAMP");

                entity.Property(e => e.ThingsToRemeber)
                    .HasColumnType("text")
                    .HasColumnName("things_to_remeber");

                entity.Property(e => e.Title)
                    .HasMaxLength(255)
                    .HasColumnName("title");

                entity.Property(e => e.Vanue)
                    .HasColumnType("text")
                    .HasColumnName("vanue");
            });

            modelBuilder.Entity<InternshipOpportunity>(entity =>
            {
                entity.HasKey(e => new { e.Id, e.WalkInId })
                    .HasName("PRIMARY")
                    .HasAnnotation("MySql:IndexPrefixLength", new[] { 0, 0 });

                entity.ToTable("internship_opportunity");

                entity.HasIndex(e => e.WalkInId, "fk_internship_opportunity_walk_in1_idx");

                entity.Property(e => e.Id)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("id");

                entity.Property(e => e.WalkInId).HasColumnName("walk_in_id");

                entity.Property(e => e.Available).HasColumnName("available");

                entity.Property(e => e.Title)
                    .HasMaxLength(255)
                    .HasColumnName("title");

                entity.HasOne(d => d.WalkIn)
                    .WithMany(p => p.InternshipOpportunities)
                    .HasForeignKey(d => d.WalkInId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_internship_opportunity_walk_in1");
            });

            modelBuilder.Entity<JobRole>(entity =>
            {
                entity.ToTable("job_role");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Compensation)
                    .HasMaxLength(45)
                    .HasColumnName("compensation");

                entity.Property(e => e.CreatedDate)
                    .HasColumnType("datetime")
                    .HasColumnName("created_date")
                    .HasDefaultValueSql("CURRENT_TIMESTAMP");

                entity.Property(e => e.Description)
                    .HasMaxLength(3000)
                    .HasColumnName("description");

                entity.Property(e => e.ModifiedDate)
                    .HasColumnType("datetime")
                    .ValueGeneratedOnAddOrUpdate()
                    .HasColumnName("modified_date")
                    .HasDefaultValueSql("CURRENT_TIMESTAMP");

                entity.Property(e => e.Name)
                    .HasMaxLength(255)
                    .HasColumnName("name");

                entity.Property(e => e.Requirements)
                    .HasColumnType("text")
                    .HasColumnName("requirements");

                entity.HasMany(d => d.Applications)
                    .WithMany(p => p.JobRoles)
                    .UsingEntity<Dictionary<string, object>>(
                        "JobRoleHasApplication",
                        l => l.HasOne<Application>().WithMany().HasForeignKey("ApplicationsId").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("fk_job_role_has_applications_applications1"),
                        r => r.HasOne<JobRole>().WithMany().HasForeignKey("JobRoleId").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("fk_job_role_has_applications_job_role1"),
                        j =>
                        {
                            j.HasKey("JobRoleId", "ApplicationsId").HasName("PRIMARY").HasAnnotation("MySql:IndexPrefixLength", new[] { 0, 0 });

                            j.ToTable("job_role_has_applications");

                            j.HasIndex(new[] { "ApplicationsId" }, "fk_job_role_has_applications_applications1_idx");

                            j.HasIndex(new[] { "JobRoleId" }, "fk_job_role_has_applications_job_role1_idx");

                            j.IndexerProperty<int>("JobRoleId").HasColumnName("job_role_id");

                            j.IndexerProperty<int>("ApplicationsId").HasColumnName("applications_id");
                        });

                entity.HasMany(d => d.WalkIns)
                    .WithMany(p => p.JobRoles)
                    .UsingEntity<Dictionary<string, object>>(
                        "JobRoleHasWalkIn",
                        l => l.HasOne<WalkIn>().WithMany().HasForeignKey("WalkInId").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("fk_job_role_has_walk_in_walk_in1"),
                        r => r.HasOne<JobRole>().WithMany().HasForeignKey("JobRoleId").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("fk_job_role_has_walk_in_job_role1"),
                        j =>
                        {
                            j.HasKey("JobRoleId", "WalkInId").HasName("PRIMARY").HasAnnotation("MySql:IndexPrefixLength", new[] { 0, 0 });

                            j.ToTable("job_role_has_walk_in");

                            j.HasIndex(new[] { "JobRoleId" }, "fk_job_role_has_walk_in_job_role1_idx");

                            j.HasIndex(new[] { "WalkInId" }, "fk_job_role_has_walk_in_walk_in1_idx");

                            j.IndexerProperty<int>("JobRoleId").HasColumnName("job_role_id");

                            j.IndexerProperty<int>("WalkInId").HasColumnName("walk_in_id");
                        });
            });

            modelBuilder.Entity<Location>(entity =>
            {
                entity.ToTable("location");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.CreatedDate)
                    .HasColumnType("datetime")
                    .HasColumnName("created_date")
                    .HasDefaultValueSql("CURRENT_TIMESTAMP");

                entity.Property(e => e.ModifiedDate)
                    .HasColumnType("datetime")
                    .ValueGeneratedOnAddOrUpdate()
                    .HasColumnName("modified_date")
                    .HasDefaultValueSql("CURRENT_TIMESTAMP");

                entity.Property(e => e.Name)
                    .HasMaxLength(45)
                    .HasColumnName("name");
            });

            modelBuilder.Entity<TimeSlot>(entity =>
            {
                entity.ToTable("time_slot");

                entity.HasIndex(e => e.WalkInId, "fk_time_Slot_walk_in1_idx");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.CreatedDate)
                    .HasColumnType("datetime")
                    .HasColumnName("created_date")
                    .HasDefaultValueSql("CURRENT_TIMESTAMP");

                entity.Property(e => e.EndTime)
                    .HasColumnType("time")
                    .HasColumnName("endTime");

                entity.Property(e => e.ModifiedDate)
                    .HasColumnType("datetime")
                    .ValueGeneratedOnAddOrUpdate()
                    .HasColumnName("modified_date")
                    .HasDefaultValueSql("CURRENT_TIMESTAMP");

                entity.Property(e => e.StartTime)
                    .HasColumnType("time")
                    .HasColumnName("startTime");

                entity.Property(e => e.WalkInId).HasColumnName("walk_in_id");

                entity.HasOne(d => d.WalkIn)
                    .WithMany(p => p.TimeSlots)
                    .HasForeignKey(d => d.WalkInId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_time_Slot_walk_in1");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.ToTable("user");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.AplicantType)
                    .HasMaxLength(255)
                    .HasColumnName("aplicantType");

                entity.Property(e => e.AppearedZeus)
                    .HasMaxLength(20)
                    .HasColumnName("appearedZeus");

                entity.Property(e => e.College)
                    .HasMaxLength(255)
                    .HasColumnName("college");

                entity.Property(e => e.CollegeLocation)
                    .HasMaxLength(255)
                    .HasColumnName("collegeLocation");

                entity.Property(e => e.CreatedDate)
                    .HasColumnType("datetime")
                    .HasColumnName("created_date")
                    .HasDefaultValueSql("CURRENT_TIMESTAMP");

                entity.Property(e => e.CurrentCtc).HasColumnName("currentCtc");

                entity.Property(e => e.EmailId)
                    .HasMaxLength(45)
                    .HasColumnName("email_id");

                entity.Property(e => e.ExpectedCtc).HasColumnName("expectedCtc");

                entity.Property(e => e.FirstName)
                    .HasMaxLength(255)
                    .HasColumnName("firstName");

                entity.Property(e => e.LastName)
                    .HasMaxLength(255)
                    .HasColumnName("lastName");

                entity.Property(e => e.ModifiedDate)
                    .HasColumnType("datetime")
                    .ValueGeneratedOnAddOrUpdate()
                    .HasColumnName("modified_date")
                    .HasDefaultValueSql("CURRENT_TIMESTAMP");

                entity.Property(e => e.NoticePeriod)
                    .HasMaxLength(255)
                    .HasColumnName("noticePeriod");

                entity.Property(e => e.PassingYear).HasColumnName("passingYear");

                entity.Property(e => e.Percentage).HasColumnName("percentage");

                entity.Property(e => e.Phone)
                    .HasMaxLength(13)
                    .HasColumnName("phone");

                entity.Property(e => e.Portfolio)
                    .HasMaxLength(255)
                    .HasColumnName("portfolio");

                entity.Property(e => e.PreferedJob)
                    .HasMaxLength(255)
                    .HasColumnName("preferedJob");

                entity.Property(e => e.Qualification)
                    .HasMaxLength(255)
                    .HasColumnName("qualification");

                entity.Property(e => e.Resume)
                    .HasMaxLength(255)
                    .HasColumnName("resume");

                entity.Property(e => e.Stream)
                    .HasMaxLength(255)
                    .HasColumnName("stream");

                entity.Property(e => e.Tech)
                    .HasMaxLength(255)
                    .HasColumnName("tech");

                entity.Property(e => e.YearOfExperience).HasColumnName("yearOfExperience");
            });

            modelBuilder.Entity<WalkIn>(entity =>
            {
                entity.ToTable("walk_in");

                entity.HasIndex(e => e.LocationId, "fk_walk_in_location1_idx");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.CreatedDate)
                    .HasColumnType("datetime")
                    .HasColumnName("created_date")
                    .HasDefaultValueSql("CURRENT_TIMESTAMP");

                entity.Property(e => e.EndDate)
                    .HasMaxLength(20)
                    .HasColumnName("endDate");

                entity.Property(e => e.LocationId).HasColumnName("location_id");

                entity.Property(e => e.ModifiedDate)
                    .HasColumnType("datetime")
                    .ValueGeneratedOnAddOrUpdate()
                    .HasColumnName("modified_date")
                    .HasDefaultValueSql("CURRENT_TIMESTAMP");

                entity.Property(e => e.StartDate)
                    .HasMaxLength(20)
                    .HasColumnName("startDate");

                entity.Property(e => e.Title)
                    .HasMaxLength(45)
                    .HasColumnName("title");

                entity.HasOne(d => d.Location)
                    .WithMany(p => p.WalkIns)
                    .HasForeignKey(d => d.LocationId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_walk_in_location1");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
