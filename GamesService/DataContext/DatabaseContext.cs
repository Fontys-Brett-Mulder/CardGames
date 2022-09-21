using GamesService.Models;
using Microsoft.EntityFrameworkCore;

namespace GamesService.DataContext
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
        {
        }

        // Add new models here
        public DbSet<GameModel> Games { get; set; }

    }
}
