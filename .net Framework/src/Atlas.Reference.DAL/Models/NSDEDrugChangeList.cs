//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Atlas.Reference.DAL.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class NSDEDrugChangeList
    {
        public long DrugChangeListSK { get; set; }
        public string NDC { get; set; }
        public Nullable<System.Guid> BatchId { get; set; }
        public string ChangeAction { get; set; }
        public Nullable<System.DateTime> MarketStartDate { get; set; }
        public Nullable<System.DateTime> MarketEndDate { get; set; }
        public string MarketCategory { get; set; }
        public Nullable<System.DateTime> PrevMarketStartDate { get; set; }
        public Nullable<System.DateTime> PreMarketEndDate { get; set; }
        public string PrevMarketCategory { get; set; }
    }
}
