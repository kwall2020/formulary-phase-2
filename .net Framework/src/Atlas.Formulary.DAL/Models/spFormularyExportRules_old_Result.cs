//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Atlas.Formulary.DAL.Models
{
    using System;
    
    public partial class spFormularyExportRules_old_Result
    {
        public string IsDelete { get; set; }
        public string FrmlryID { get; set; }
        public int FrmlryVer { get; set; }
        public long RuleId { get; set; }
        public string RuleType { get; set; }
        public string Oper { get; set; }
        public string RuleValue { get; set; }
        public bool IsCovered { get; set; }
        public Nullable<int> TierCode { get; set; }
        public string IsOverrideGenericCheck { get; set; }
        public string IsSpecialityDrug { get; set; }
        public string IsRestrictToPkgSize { get; set; }
        public string IsMedicareCarveOut { get; set; }
        public string IsMedicaidFeeScreen { get; set; }
        public string IsMaintenanceDrug { get; set; }
        public string IsExtendedDaysSupply { get; set; }
        public string IsPARequired { get; set; }
        public string PAAgeLimitMin { get; set; }
        public string PAAgeLimitMax { get; set; }
        public string PAAgeLimitType { get; set; }
        public string PAName { get; set; }
        public string IsSTRequired { get; set; }
        public string STName { get; set; }
        public string MaxFillQty { get; set; }
        public string MaxFillPerPeriod { get; set; }
        public string MaxFillPeriodType { get; set; }
        public string QLFillQty { get; set; }
        public string QLFillPerPeriod { get; set; }
        public string QLFillPeriodType { get; set; }
        public string DaysSupplyFillQty { get; set; }
        public string DaysSupplyFillPerPeriod { get; set; }
        public string DaysSupplyPeriodType { get; set; }
        public string Gender { get; set; }
        public string AgeLimitMin { get; set; }
        public string AgeLimitMax { get; set; }
        public string AgeLimitType { get; set; }
        public string MaleAgeLimitMin { get; set; }
        public string MaleAgeLimitMax { get; set; }
        public string MaleAgeLimitType { get; set; }
        public string FemaleAgeLimitMin { get; set; }
        public string FemaleAgeLimitMax { get; set; }
        public string FemaleAgeLimitType { get; set; }
        public string PDLStatus { get; set; }
        public string PDFMessage { get; set; }
        public string UserNotes { get; set; }
    }
}
