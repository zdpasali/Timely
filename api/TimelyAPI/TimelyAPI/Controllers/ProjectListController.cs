using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;

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

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                    select ProjectName, StartTime, EndTime, DurationTime from dbo.ProjectList order by ProjectId";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ProjectListAppConnection");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();

                }
            }
            return new JsonResult(table);
        }

    }
}
