using DashboardVisual.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DashboardVisual.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class AjaxAPIController : ControllerBase
    {

        private readonly DashboardDbContext _context;

        public AjaxAPIController(DashboardDbContext context)
        {
            _context = context;
        }

        [Route("AjaxMethod")]
        [HttpPost]
        public async Task<List<Mytable>> AjaxMethod()
        {
            //string datetime  = DateTime.Now.ToString();
            //return datetime;

            var res = await _context.Mytables.ToListAsync();
            return res;
        }
    }

}
