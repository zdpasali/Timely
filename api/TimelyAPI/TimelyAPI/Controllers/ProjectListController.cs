using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace TimelyAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectListController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public ProjectListController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
    }
}
