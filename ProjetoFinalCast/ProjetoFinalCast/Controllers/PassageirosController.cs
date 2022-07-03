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
    public class PassageirosController : ControllerBase
    {
        private readonly DataContext _context;

        public PassageirosController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Passageiros
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Passageiro>>> GetPassageiros()
        {
          if (_context.Passageiros == null)
          {
              return NotFound();
          }
            return await _context.Passageiros.ToListAsync();
        }

        // GET: api/Passageiros/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Passageiro>> GetPassageiro(int id)
        {
          if (_context.Passageiros == null)
          {
              return NotFound();
          }
            var passageiro = await _context.Passageiros.FindAsync(id);

            if (passageiro == null)
            {
                return NotFound();
            }

            return passageiro;
        }

        // PUT: api/Passageiros/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPassageiro(int id, Passageiro passageiro)
        {
            if (id != passageiro.Id)
            {
                return BadRequest();
            }

            _context.Entry(passageiro).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PassageiroExists(id))
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

        // POST: api/Passageiros
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Passageiro>> PostPassageiro(Passageiro passageiro)
        {
          if (_context.Passageiros == null)
          {
              return Problem("Entity set 'DataContext.Passageiros'  is null.");
          }
            _context.Passageiros.Add(passageiro);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPassageiro", new { id = passageiro.Id }, passageiro);
        }

        // DELETE: api/Passageiros/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePassageiro(int id)
        {
            if (_context.Passageiros == null)
            {
                return NotFound();
            }
            var passageiro = await _context.Passageiros.FindAsync(id);
            if (passageiro == null)
            {
                return NotFound();
            }

            _context.Passageiros.Remove(passageiro);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PassageiroExists(int id)
        {
            return (_context.Passageiros?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
