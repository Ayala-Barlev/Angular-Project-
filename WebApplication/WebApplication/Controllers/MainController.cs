using System;
using WebApplication.Models;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApplication.Controllers
{
    [System.Web.Http.Cors.EnableCors(origins: "*", headers: "*", methods: "*")]
    public class MainController : ApiController
    {
        // GET: api/Main
        [HttpGet]
        [Route("api/Main/GetServices")]
        public List<Service> GetServices() => DB.ServicesList;

        [HttpGet]
        [Route("api/Main/GetComments")]
        public List<Comment> GetComments() => DB.CommentsList;

        [HttpPut]
        [Route("api/Main/PutLike")]
        public List<Comment> PutLike([FromBody] int id)
        {
            foreach (Comment c in DB.CommentsList)
            {
                if (c.Id == id)
                {
                    c.AddLike();
                    break;
                }
            }
            return DB.CommentsList;
        }

        [HttpPost]
        [Route("api/Main/PostComment")]
        public List<Comment> PostComment([FromBody] Comment comment)
        {
            DB.CommentsList.Add(comment);
            return DB.CommentsList;
        }
        // GET: api/Main/5
        //public string Get(int id)
        //{
        //    return "value";
        //}

        // POST: api/Main
        //public void Post([FromBody]string value)
        //{
        //}

        //PUT: api/Main/5
        //[HttpPut]
        //[Route("api/Main/PutLike")]
        //public void PutLike(int id)
        //{
        //    foreach (Comment c in DB.CommentsList)
        //    {
        //        if (c.Id == id)
        //        {
        //            c.AddLike();
        //            return;
        //        }
        //    }
        //}

        // DELETE: api/Main/5
        //public void Delete(int id)
        //{
        //}
    }
}
