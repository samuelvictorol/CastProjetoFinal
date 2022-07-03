using System.ComponentModel.DataAnnotations;

namespace ProjetoFinalCast.Models
{
    public class Lugar
    {

        public int Id { get; set; }
        [StringLength(20)]
        public string? NomeLugar{ get; set; }
        [StringLength(200)]
        public string? Url { get; set; }
        public double ValorDia { get; set; }

    }
}
