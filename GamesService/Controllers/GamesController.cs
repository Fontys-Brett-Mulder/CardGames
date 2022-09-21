using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GamesService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GamesController : Controller
    {
        // GET: GamesController
        [HttpGet("get")]
        public string Get()
        {
            return "Hello";
        }
    }
}
