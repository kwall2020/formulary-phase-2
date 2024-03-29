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
	/// the ContactTenant Repository for Benefit Plan
	/// </summary>
	public class ContactTenantRepository : EFRepositoryBase<CntctTenant, BenefitPlanEntities>, IContactTenantRepository
	{
		/// <summary>
		/// the Constructor for ContactTenant Repository
		/// </summary>
		/// <param name="db">the Benefit Plan Entity Framework</param>
		public ContactTenantRepository(IConfig config, BenefitPlanEntities db) : base(config, db)
		{
		}

        public override void AddOrUpdate(CntctTenant itemToUpdate)
        {
            _db.CntctTenant.Attach(itemToUpdate);
            _db.Entry(itemToUpdate).State = itemToUpdate.CntctTenantSK == 0 ? EntityState.Added : EntityState.Modified;
        }
    }
}

