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
    using System.Collections.Generic;
    
    public partial class CvrgPrptyPgm
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public CvrgPrptyPgm()
        {
            this.PAPgm = new HashSet<PAPgm>();
            this.StepThrpyPgm = new HashSet<StepThrpyPgm>();
            this.CvrgPrptyPgmDtl = new HashSet<CvrgPrptyPgmDtl>();
        }
    
        public long CvrgPrptyPgmSK { get; set; }
        public long CvrgPrptyPgmTypeSK { get; set; }
        public long DrugRefDbSK { get; set; }
        public string CvrgPrptyPgmName { get; set; }
        public string ClaimsMsgCode { get; set; }
        public string ClaimsMsgText { get; set; }
        public System.DateTime EfctvStartDt { get; set; }
        public System.DateTime EfctvEndDt { get; set; }
        public string CreatedBy { get; set; }
        public System.DateTimeOffset CreatedTs { get; set; }
        public string LastModfdBy { get; set; }
        public System.DateTimeOffset LastModfdTs { get; set; }
        public Nullable<System.DateTimeOffset> InctvTs { get; set; }
        public Nullable<System.DateTimeOffset> DelTs { get; set; }
    
        public virtual CvrgPrptyPgmType CvrgPrptyPgmType { get; set; }
        public virtual DrugRefDb DrugRefDb { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<PAPgm> PAPgm { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<StepThrpyPgm> StepThrpyPgm { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<CvrgPrptyPgmDtl> CvrgPrptyPgmDtl { get; set; }
    }
}