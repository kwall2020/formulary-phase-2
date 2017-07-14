using Atlas.BenefitPlan.DAL.Models;
using Atlas.BenefitPlan.DAL.Repositories.Interfaces; 
using Atlas.Configuration;
using Atlas.Core.DAL.Repositories;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks; 

namespace Atlas.BenefitPlan.DAL.Repositories
{
	/// <summary>
	/// the Prescriber Repository for Benefit Plan
	/// </summary>
	public class PrescriberRepository : EFRepositoryBase<Prescbr, BenefitPlanEntities>, IPrescriberRepository
	{
		/// <summary>
		/// the Constructor for Prescriber Repository
		/// </summary>
		/// <param name="db">the Benefit Plan Entity Framework</param>
		public PrescriberRepository(IConfig config, BenefitPlanEntities db) : base(config, db)
		{
		}

        /// <summary>
        /// Overrides Add or Update method for Prescribers
        /// </summary>
        /// <param name="itemToUpdate"></param>
        public override void AddOrUpdate(Prescbr itemToUpdate)
        {
            _db.Prescbr.Attach(itemToUpdate);
            _db.Entry(itemToUpdate).State = itemToUpdate.PrescbrSK == 0 ? EntityState.Added : EntityState.Modified;
        }
    }
}
