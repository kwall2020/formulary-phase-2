﻿using Atlas.Core.DAL.Models.Containers;
using Atlas.Core.WebApi.Services;
using Atlas.Formulary.DAL;
using Atlas.Formulary.DAL.Models;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace AtlasWebApi.Controllers.V1.Reference
{
    /// <summary>
    /// LOB WebApi controller
    /// </summary>
    public class LOBController : ApiController
    {

        private IFormularyRepositoryFactory _repoFactory;
        private IExceptionMessageGenerator _exceptionResponseGenerator;

        /// <summary>
        /// Constructor
        /// </summary>
        /// <param name="repoFactory">LOB repository factory</param>
        /// <param name="exceptionResponseGenerator">Exception handler</param>
        public LOBController(IFormularyRepositoryFactory repoFactory, IExceptionMessageGenerator exceptionResponseGenerator)
        {
            _repoFactory = repoFactory;
            _exceptionResponseGenerator = exceptionResponseGenerator;
        }


        [HttpGet]
        public IHttpActionResult GetLOBs()
        {
            var result = new QueryResult<LOB>();
            using (var lobRepository = _repoFactory.LOB())
            {

                List<LOB> values = lobRepository.GetLOB();
                result.Count = values.Count();
                result.Rows = values;
            }

            return Ok(result);
        }
    }
}