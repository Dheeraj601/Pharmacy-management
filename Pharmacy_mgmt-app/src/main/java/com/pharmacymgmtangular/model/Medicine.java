package com.pharmacymgmtangular.model;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="medicine")
public class Medicine 
{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long mid;
	
	@Column(name="m_name")
	private String mname;
	
	@Column(name="mfg_By")
	private String mfgBy;
	
	@Column(name="mfg_Date")
	private String mfgDate;
	
	@Column(name="exp_Date")
	private String expDate;
	
	@Column(name="price")
	private double price;
	
	@Column(name="qty")
	private int qty;

	public Medicine() {
		
	}
	
	public Medicine(String mname, String mfgBy, String mfgDate, String expDate, double price, int qty) {
		super();
		this.mname = mname;
		this.mfgBy = mfgBy;
		this.mfgDate = mfgDate;
		this.expDate = expDate;
		this.price = price;
		this.qty = qty;
	}

	public long getMid() {
		return mid;
	}

	public void setMid(long mid) {
		this.mid = mid;
	}

	public String getMname() {
		return mname;
	}

	public void setMname(String mname) {
		this.mname = mname;
	}

	public String getMfgBy() {
		return mfgBy;
	}

	public void setMfgBy(String mfgBy) {
		this.mfgBy = mfgBy;
	}

	public String getMfgDate() {
		return mfgDate;
	}

	public void setMfgDate(String mfgDate) {
		this.mfgDate = mfgDate;
	}

	public String getExpDate() {
		return expDate;
	}

	public void setExpDate(String expDate) {
		this.expDate = expDate;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public int getQty() {
		return qty;
	}

	public void setQty(int qty) {
		this.qty = qty;
	}
	
}
