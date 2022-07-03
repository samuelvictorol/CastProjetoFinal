using Microsoft.EntityFrameworkCore;
using ProjetoFinalCast.Models;

namespace ProjetoFinalCast.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options) { }
        public DbSet<Passageiro> Passageiros{ get; set; }
        public DbSet<Lugar> Lugares { get; set; }

        public DbSet<Empresa> Empresas { get; set; }
        public DbSet<Passagem> Passagens{ get; set; }


    }
}
