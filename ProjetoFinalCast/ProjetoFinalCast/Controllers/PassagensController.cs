using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjetoFinalCast.Data;
using ProjetoFinalCast.Models;

namespace ProjetoFinalCast.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PassagensController : ControllerBase
    {
        private readonly DataContext _context;

        public PassagensController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Passagens
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Passagem>>> GetPassagens()
        {
          if (_context.Passagens == null)
          {
              return NotFound();
          }
            return await _context.Passagens.ToListAsync();
        }

        // GET: api/Passagens/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Passagem>> GetPassagem(int id)
        {
          if (_context.Passagens == null)
          {
              return NotFound();
          }
            var passagem = await _context.Passagens.FindAsync(id);

            if (passagem == null)
            {
                return NotFound();
            }

            return passagem;
        }

        // PUT: api/Passagens/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPassagem(int id, Passagem passagem)
        {
            if (id != passagem.Id)
            {
                return BadRequest();
            }

            _context.Entry(passagem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PassagemExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Passagens
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Passagem>> PostPassagem(Passagem passagem)
        {
          if (_context.Passagens == null)
          {
              return Problem("Entity set 'DataContext.Passagens'  is null.");
          }
            _context.Passagens.Add(passagem);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPassagem", new { id = passagem.Id }, passagem);
        }

        // DELETE: api/Passagens/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePassagem(int id)
        {
            if (_context.Passagens == null)
            {
                return NotFound();
            }
            var passagem = await _context.Passagens.FindAsync(id);
            if (passagem == null)
            {
                return NotFound();
            }

            _context.Passagens.Remove(passagem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PassagemExists(int id)
        {
            return (_context.Passagens?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
