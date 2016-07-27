﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Promact.Oauth.Server.Models.ApplicationClasses;
using Promact.Oauth.Server.Data;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Promact.Oauth.Server.Controllers
{
    [Route("api/[controller]")]
    public class ProjectController : Controller
    {
        private readonly ApplicationDbContext _appDbContext;
        public ProjectController(ApplicationDbContext appContext)
        {
            _appDbContext = appContext;
        }

        // GET: api/values
        [HttpGet]
        [Route("projects")]
        public IEnumerable<ProjectAc> Get()
        {
            var projects = _appDbContext.Projects?.ToList();
            var projectAcs = new List<ProjectAc>();
            projects?.ForEach(x =>
            {
                projectAcs.Add(new ProjectAc
                {
                    Name = x.Name
                });
            });
            return projectAcs;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        [Route("addProject")]
        public void Post([FromBody]ProjectAc project)
        {
            //if (_appDbContext.Projects == null) _appDbContext.Projects = new DbSet<Models.Project>();
            _appDbContext.Projects.Add(new Models.Project
            {
                Name = project.Name
            });
            _appDbContext.SaveChanges();
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {

        }

        // DELETE api/values/5
        [HttpDelete]
        [Route("deleteProject/{id}")]
        public void Delete(int id)
        {
            
        }
    }
}
