using Microsoft.EntityFrameworkCore;

namespace backend.Procedures
{
    public class fullWalkInContext : DbContext 
    {
        
        public virtual DbSet<fullWalkIn> FullWalkIns {get; set;} = null!;

        public fullWalkInContext() {}

        public fullWalkInContext(DbContextOptions<fullWalkInContext> options)
        : base(options) {}

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<fullWalkIn>( entity =>
            {
                entity.HasNoKey();
                entity.Property(e => e.title);
                entity.Property(e => e.startDate);
                entity.Property(e => e.endDate);
                entity.Property(e => e.jobrole);
                entity.Property(e => e.compensation);
                entity.Property(e => e.description);
                entity.Property(e => e.requirements);
                entity.Property(e => e.general_instructions);
                entity.Property(e => e.exam_instructions);
                entity.Property(e => e.system_requirements);
                entity.Property(e => e.process);
                entity.Property(e => e.location);
            });
            
        }

    }
}