using Microsoft.EntityFrameworkCore;

namespace DashboardVisual.Models
{
    public class DashboardDbContext:DbContext
    {
        public DashboardDbContext(DbContextOptions<DashboardDbContext> options):base(options) { 
        
        }

        public DbSet<Mytable> Mytables { get; set; }
    }
}
