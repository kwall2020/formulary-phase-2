﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BenefitPlanCompare.Models
{
    public class PharmaLimits : CompareEntity
    {
        public string AtlasRecordId { get; set; } 			
		public long? AtlasBenefitId { get; set; } 
		public string FulfillmentType { get; set; } 
		public decimal? EarlyRefillPercent { get; set; } 
		public int? InNetworkCostSharingDays { get; set; } 
		public int? OutNetworkCostSharingDays { get; set; } 
		public int? DaySupplyMaint { get; set; }  
		public int? DaySupplyNonMaint { get; set; } 
		public int? QtyLimitsMaint { get; set; } 
		public int? QtyLimitsNonMaint { get; set; } 
		public decimal? MaxDollarPer30Days { get; set; } 
		public decimal? MaxDollarPer60Days { get; set; } 
		public decimal? MaxDollarPer90Days { get; set; } 
		public decimal? MaxDollarPerRx { get; set; } 
    }
}