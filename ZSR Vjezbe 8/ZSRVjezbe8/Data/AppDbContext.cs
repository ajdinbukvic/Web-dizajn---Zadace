using Microsoft.EntityFrameworkCore;
using ZSRVjezbe8.Data.Entities;

namespace ZSRVjezbe8.Data
{
    public class AppDbContext : DbContext
    {
        public DbSet<WeatherSummary> WeatherSummaries { get; set; }

        public AppDbContext(DbContextOptions<AppDbContext> options): base(options)
        {

        }
    }
}
