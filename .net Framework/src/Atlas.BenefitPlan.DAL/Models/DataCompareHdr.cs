//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Atlas.BenefitPlan.DAL.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class DataCompareHdr
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public DataCompareHdr()
        {
            this.DataCompareDtl = new HashSet<DataCompareDtl>();
        }
    
        public long DataCompareHdrSK { get; set; }
        public string SessionId { get; set; }
        public string JobName { get; set; }
        public string JobType { get; set; }
        public string Stat { get; set; }
        public System.DateTime StartDt { get; set; }
        public Nullable<System.DateTime> CmpltDt { get; set; }
        public string UserID { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<DataCompareDtl> DataCompareDtl { get; set; }
    }
}