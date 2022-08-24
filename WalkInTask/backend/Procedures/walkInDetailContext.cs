using Microsoft.EntityFrameworkCore;
using  System.Data;

namespace backend.Procedures
{
    public class walkInDetailContext : DbContext

    {
        
        public virtual DbSet<walkInDetail> WalkInDetails {get; set;} = null!;

        public walkInDetailContext() {}

        public walkInDetailContext(DbContextOptions<walkInDetailContext> options)
        : base(options) {}

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<walkInDetail>( entity =>
            {
                entity.HasNoKey();
                entity.Property(e => e.title);
                entity.Property(e => e.startDate);
                entity.Property(e => e.endDate);
                entity.Property(e => e.name);
                entity.Property(e => e.location);
            });
            
        }
        
    }
}