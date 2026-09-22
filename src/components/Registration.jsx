import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, AlertCircle, Loader2, Users, UserCheck, ExternalLink, Globe } from 'lucide-react';
import { submitRegistration } from '../services/registrationService';

export default function Registration() {
  const UNSTOP_URL = "https://unstop.com/p/cloudforge-2026-bannari-amman-institute-of-technology-1759755?utm_medium=Share&utm_source=online_coding_challenge&utm_campaign=Snehas47482";

  const [teamSize, setTeamSize] = useState(2);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  // Form State
  const [formData, setFormData] = useState({
    teamName: '',
    teamLeader: {
      name: '',
      department: '',
      year: '3rd Year',
      email: '',
      phone: ''
    },
    member2: { name: '', department: '', year: '3rd Year' },
    member3: { name: '', department: '', year: '3rd Year' },
    member4: { name: '', department: '', year: '3rd Year' },
    confirmStudentBit: false,
    agreeRules: false
  });

  // Validation Error State
  const [errors, setErrors] = useState({});

  const handleLeaderChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      teamLeader: { ...prev.teamLeader, [field]: value }
    }));
    if (errors[`leader_${field}`]) {
      setErrors((prev) => ({ ...prev, [`leader_${field}`]: '' }));
    }
  };

  const handleMemberChange = (memberKey, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [memberKey]: { ...prev[memberKey], [field]: value }
    }));
    if (errors[`${memberKey}_${field}`]) {
      setErrors((prev) => ({ ...prev, [`${memberKey}_${field}`]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.teamName.trim()) {
      newErrors.teamName = 'Team name is required.';
    }

    if (!formData.teamLeader.name.trim()) {
      newErrors.leader_name = 'Team leader name is required.';
    }
    if (!formData.teamLeader.department.trim()) {
      newErrors.leader_department = 'Department is required.';
    }
    if (!formData.teamLeader.email.trim()) {
      newErrors.leader_email = 'College email is required.';
    } else if (!formData.teamLeader.email.includes('@')) {
      newErrors.leader_email = 'Please enter a valid email address.';
    }
    if (!formData.teamLeader.phone.trim()) {
      newErrors.leader_phone = 'Phone number is required.';
    }

    // Member 2 is mandatory for size >= 2
    if (!formData.member2.name.trim()) {
      newErrors.member2_name = 'Member 2 name is required.';
    }
    if (!formData.member2.department.trim()) {
      newErrors.member2_department = 'Member 2 department is required.';
    }

    // Member 3 if teamSize >= 3
    if (teamSize >= 3) {
      if (!formData.member3.name.trim()) {
        newErrors.member3_name = 'Member 3 name is required.';
      }
      if (!formData.member3.department.trim()) {
        newErrors.member3_department = 'Member 3 department is required.';
      }
    }

    // Member 4 if teamSize >= 4
    if (teamSize >= 4) {
      if (!formData.member4.name.trim()) {
        newErrors.member4_name = 'Member 4 name is required.';
      }
      if (!formData.member4.department.trim()) {
        newErrors.member4_department = 'Member 4 department is required.';
      }
    }

    if (!formData.confirmStudentBit) {
      newErrors.confirmStudentBit = 'You must confirm that all members are BIT students.';
    }

    if (!formData.agreeRules) {
      newErrors.agreeRules = 'You must agree to the hackathon rules.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!validateForm()) {
      setErrorMessage('Please fix all highlighted errors before submitting.');
      return;
    }

    setIsSubmitting(true);

    try {
      const membersList = [formData.member2];
      if (teamSize >= 3) membersList.push(formData.member3);
      if (teamSize >= 4) membersList.push(formData.member4);

      const payload = {
        teamName: formData.teamName,
        teamSize: teamSize,
        teamLeader: formData.teamLeader,
        members: membersList
      };

      const result = await submitRegistration(payload);

      if (result.success) {
        setSubmissionSuccess(result.data);
      }
    } catch (err) {
      setErrorMessage(err.message || 'Submission failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmissionSuccess(null);
    setFormData({
      teamName: '',
      teamLeader: { name: '', department: '', year: '3rd Year', email: '', phone: '' },
      member2: { name: '', department: '', year: '3rd Year' },
      member3: { name: '', department: '', year: '3rd Year' },
      member4: { name: '', department: '', year: '3rd Year' },
      confirmStudentBit: false,
      agreeRules: false
    });
    setErrors({});
    const heroEl = document.querySelector('#hero');
    if (heroEl) heroEl.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="register" className="py-24 bg-[#18181B] text-white relative border-b border-[#27272A] overflow-hidden">
      
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-10 text-center">
          <div className="font-mono text-xs font-bold text-[#F97316] tracking-widest uppercase mb-2">
            OFFICIAL REGISTRATION
          </div>
          <h2 className="font-heading font-black text-4xl sm:text-6xl text-white tracking-tight uppercase leading-[0.95]">
            READY TO <span className="text-[#F97316]">BUILD?</span>
          </h2>
          <p className="font-mono text-sm text-[#E4E4E7] tracking-wider uppercase mt-3">
            REGISTER FOR CLOUD FORGE 2026
          </p>
        </div>

        {/* Option 1: Unstop Platform Banner */}
        <div className="bg-[#27272A]/80 border-2 border-[#F97316]/60 p-6 sm:p-8 rounded-xs mb-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl hover:border-[#F97316] transition-all">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-[#F97316] text-[#18181B] rounded-xs flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#F97316]/20">
              <Globe className="w-7 h-7" />
            </div>
            <div>
              <span className="font-mono text-xs text-[#F97316] tracking-widest uppercase font-bold block mb-1">
                RECOMMENDED PORTAL
              </span>
              <h3 className="font-heading font-extrabold text-xl text-white uppercase tracking-wide">
                REGISTER THROUGH UNSTOP
              </h3>
              <p className="font-sans text-xs text-[#E4E4E7]/90 mt-1 max-w-md leading-relaxed">
                Prefer registering via the official Unstop platform? Click below to submit your team application on Unstop.
              </p>
            </div>
          </div>

          <a
            href={UNSTOP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#F97316] hover:bg-[#EA580C] text-[#18181B] font-mono font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-xs transition-all flex items-center justify-center gap-2 whitespace-nowrap shadow-xl shadow-[#F97316]/30 border border-[#F97316]"
          >
            REGISTER ON UNSTOP <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Divider */}
        <div className="relative my-8 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#27272A]" />
          </div>
          <span className="relative bg-[#18181B] px-4 font-mono text-xs text-[#52525B] uppercase tracking-widest">
            OR FILL DIRECT TEAM FORM BELOW
          </span>
        </div>

        {/* If Successful Submission State */}
        {submissionSuccess ? (
          <div className="bg-[#27272A]/80 border-2 border-[#F97316] p-8 sm:p-12 rounded-xs shadow-2xl text-center flex flex-col items-center">
            
            <div className="w-16 h-16 bg-[#F97316] text-[#18181B] rounded-xs flex items-center justify-center mb-6 shadow-lg shadow-[#F97316]/30">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <span className="font-mono text-xs text-[#F97316] tracking-widest uppercase mb-2 font-bold">
              STATUS: CONFIRMED
            </span>
            
            <h3 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tight uppercase mb-2">
              REGISTRATION RECEIVED
            </h3>

            <p className="font-sans text-base text-[#E4E4E7] mb-8 max-w-lg">
              "Your team registration has been submitted successfully."
            </p>

            {/* Generated Details Card */}
            <div className="bg-[#18181B] border border-[#52525B]/40 p-6 rounded-xs w-full max-w-md text-left font-mono text-xs space-y-3 mb-8">
              <div className="flex justify-between border-b border-[#27272A] pb-2">
                <span className="text-[#52525B]">REGISTRATION ID:</span>
                <span className="text-[#F97316] font-bold text-sm">{submissionSuccess.registrationId}</span>
              </div>
              <div className="flex justify-between border-b border-[#27272A] pb-2">
                <span className="text-[#52525B]">TEAM NAME:</span>
                <span className="text-white font-bold">{submissionSuccess.teamName}</span>
              </div>
              <div className="flex justify-between border-b border-[#27272A] pb-2">
                <span className="text-[#52525B]">TEAM SIZE:</span>
                <span className="text-white">{submissionSuccess.teamSize} Members</span>
              </div>
              <div className="flex justify-between border-b border-[#27272A] pb-2">
                <span className="text-[#52525B]">LEADER:</span>
                <span className="text-white">{submissionSuccess.teamLeader.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#52525B]">SUBMITTED AT:</span>
                <span className="text-[#E4E4E7]">{new Date(submissionSuccess.submittedAt).toLocaleTimeString()}</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="bg-[#F97316] hover:bg-[#EA580C] text-[#18181B] font-mono font-bold text-sm uppercase tracking-wider px-8 py-3.5 rounded-xs transition-all flex items-center gap-2 shadow-lg shadow-[#F97316]/20"
            >
              BACK TO CLOUD FORGE
            </button>

          </div>
        ) : (
          
          /* Form Container */
          <form onSubmit={handleSubmit} className="bg-[#27272A]/40 border border-[#27272A] p-6 sm:p-10 rounded-xs space-y-8 shadow-2xl">
            
            {errorMessage && (
              <div className="bg-[#EA580C]/20 border border-[#EA580C] text-[#FAFAF9] p-4 rounded-xs text-xs font-mono flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-[#F97316] flex-shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* 1. Team Details */}
            <div>
              <div className="flex items-center gap-2 border-b border-[#27272A] pb-3 mb-6">
                <Users className="w-5 h-5 text-[#F97316]" />
                <h3 className="font-heading font-bold text-lg text-white uppercase tracking-wider">
                  1. TEAM DETAILS
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono text-xs text-[#E4E4E7] uppercase mb-2">
                    TEAM NAME <span className="text-[#F97316]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.teamName}
                    onChange={(e) => {
                      setFormData({ ...formData, teamName: e.target.value });
                      if (errors.teamName) setErrors({ ...errors, teamName: '' });
                    }}
                    placeholder="e.g. CloudForge_Architects"
                    className={`w-full bg-[#18181B] border ${errors.teamName ? 'border-[#EA580C]' : 'border-[#52525B]/50'} focus:border-[#F97316] text-white px-4 py-3 rounded-xs font-mono text-sm focus:outline-none transition-colors`}
                  />
                  {errors.teamName && <span className="font-mono text-[10px] text-[#EA580C] mt-1 block">{errors.teamName}</span>}
                </div>

                <div>
                  <label className="block font-mono text-xs text-[#E4E4E7] uppercase mb-2">
                    TEAM SIZE <span className="text-[#F97316]">*</span>
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[2, 3, 4].map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setTeamSize(size)}
                        className={`py-3 font-mono text-xs font-bold rounded-xs border transition-all ${
                          teamSize === size
                            ? 'bg-[#F97316] text-[#18181B] border-[#F97316]'
                            : 'bg-[#18181B] text-[#E4E4E7] border-[#52525B]/40 hover:border-[#52525B]'
                        }`}
                      >
                        {size} MEMBERS
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Team Leader */}
            <div>
              <div className="flex items-center gap-2 border-b border-[#27272A] pb-3 mb-6">
                <UserCheck className="w-5 h-5 text-[#F97316]" />
                <h3 className="font-heading font-bold text-lg text-white uppercase tracking-wider">
                  2. TEAM LEADER DETAILS
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="sm:col-span-2">
                  <label className="block font-mono text-xs text-[#E4E4E7] uppercase mb-2">
                    FULL NAME <span className="text-[#F97316]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.teamLeader.name}
                    onChange={(e) => handleLeaderChange('name', e.target.value)}
                    placeholder="Enter leader's full name"
                    className={`w-full bg-[#18181B] border ${errors.leader_name ? 'border-[#EA580C]' : 'border-[#52525B]/50'} focus:border-[#F97316] text-white px-4 py-3 rounded-xs font-mono text-sm focus:outline-none transition-colors`}
                  />
                  {errors.leader_name && <span className="font-mono text-[10px] text-[#EA580C] mt-1 block">{errors.leader_name}</span>}
                </div>

                <div>
                  <label className="block font-mono text-xs text-[#E4E4E7] uppercase mb-2">
                    BIT DEPARTMENT <span className="text-[#F97316]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.teamLeader.department}
                    onChange={(e) => handleLeaderChange('department', e.target.value)}
                    placeholder="e.g. CSE / IT / ECE"
                    className={`w-full bg-[#18181B] border ${errors.leader_department ? 'border-[#EA580C]' : 'border-[#52525B]/50'} focus:border-[#F97316] text-white px-4 py-3 rounded-xs font-mono text-sm focus:outline-none transition-colors`}
                  />
                  {errors.leader_department && <span className="font-mono text-[10px] text-[#EA580C] mt-1 block">{errors.leader_department}</span>}
                </div>

                <div>
                  <label className="block font-mono text-xs text-[#E4E4E7] uppercase mb-2">
                    YEAR OF STUDY <span className="text-[#F97316]">*</span>
                  </label>
                  <select
                    value={formData.teamLeader.year}
                    onChange={(e) => handleLeaderChange('year', e.target.value)}
                    className="w-full bg-[#18181B] border border-[#52525B]/50 focus:border-[#F97316] text-white px-4 py-3 rounded-xs font-mono text-sm focus:outline-none"
                  >
                    <option value="1st Year">1st Year</option>
                    <option value="2nd Year">2nd Year</option>
                    <option value="3rd Year">3rd Year</option>
                    <option value="4th Year">4th Year</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-xs text-[#E4E4E7] uppercase mb-2">
                    COLLEGE EMAIL <span className="text-[#F97316]">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.teamLeader.email}
                    onChange={(e) => handleLeaderChange('email', e.target.value)}
                    placeholder="student.xx20@bitsathy.ac.in"
                    className={`w-full bg-[#18181B] border ${errors.leader_email ? 'border-[#EA580C]' : 'border-[#52525B]/50'} focus:border-[#F97316] text-white px-4 py-3 rounded-xs font-mono text-sm focus:outline-none transition-colors`}
                  />
                  {errors.leader_email && <span className="font-mono text-[10px] text-[#EA580C] mt-1 block">{errors.leader_email}</span>}
                </div>

                <div>
                  <label className="block font-mono text-xs text-[#E4E4E7] uppercase mb-2">
                    PHONE NUMBER <span className="text-[#F97316]">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.teamLeader.phone}
                    onChange={(e) => handleLeaderChange('phone', e.target.value)}
                    placeholder="10-digit mobile number"
                    className={`w-full bg-[#18181B] border ${errors.leader_phone ? 'border-[#EA580C]' : 'border-[#52525B]/50'} focus:border-[#F97316] text-white px-4 py-3 rounded-xs font-mono text-sm focus:outline-none transition-colors`}
                  />
                  {errors.leader_phone && <span className="font-mono text-[10px] text-[#EA580C] mt-1 block">{errors.leader_phone}</span>}
                </div>
              </div>
            </div>

            {/* 3. Team Members */}
            <div>
              <div className="flex items-center gap-2 border-b border-[#27272A] pb-3 mb-6">
                <Users className="w-5 h-5 text-[#F97316]" />
                <h3 className="font-heading font-bold text-lg text-white uppercase tracking-wider">
                  3. TEAM MEMBERS
                </h3>
              </div>

              {/* Member 2 */}
              <div className="bg-[#18181B] p-4 rounded-xs border border-[#27272A] mb-4 space-y-4">
                <span className="font-mono text-xs text-[#F97316] font-bold block uppercase">
                  MEMBER 2 DETAILS (MANDATORY)
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block font-mono text-[10px] text-[#52525B] uppercase mb-1">NAME</label>
                    <input
                      type="text"
                      value={formData.member2.name}
                      onChange={(e) => handleMemberChange('member2', 'name', e.target.value)}
                      placeholder="Full Name"
                      className={`w-full bg-[#27272A] border ${errors.member2_name ? 'border-[#EA580C]' : 'border-[#52525B]/40'} text-white px-3 py-2 rounded-xs font-mono text-xs focus:outline-none`}
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[10px] text-[#52525B] uppercase mb-1">DEPARTMENT</label>
                    <input
                      type="text"
                      value={formData.member2.department}
                      onChange={(e) => handleMemberChange('member2', 'department', e.target.value)}
                      placeholder="Department"
                      className={`w-full bg-[#27272A] border ${errors.member2_department ? 'border-[#EA580C]' : 'border-[#52525B]/40'} text-white px-3 py-2 rounded-xs font-mono text-xs focus:outline-none`}
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[10px] text-[#52525B] uppercase mb-1">YEAR</label>
                    <select
                      value={formData.member2.year}
                      onChange={(e) => handleMemberChange('member2', 'year', e.target.value)}
                      className="w-full bg-[#27272A] border border-[#52525B]/40 text-white px-3 py-2 rounded-xs font-mono text-xs focus:outline-none"
                    >
                      <option value="1st Year">1st Year</option>
                      <option value="2nd Year">2nd Year</option>
                      <option value="3rd Year">3rd Year</option>
                      <option value="4th Year">4th Year</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Member 3 (Optional / Active if teamSize >= 3) */}
              {teamSize >= 3 && (
                <div className="bg-[#18181B] p-4 rounded-xs border border-[#27272A] mb-4 space-y-4">
                  <span className="font-mono text-xs text-[#F97316] font-bold block uppercase">
                    MEMBER 3 DETAILS
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block font-mono text-[10px] text-[#52525B] uppercase mb-1">NAME</label>
                      <input
                        type="text"
                        value={formData.member3.name}
                        onChange={(e) => handleMemberChange('member3', 'name', e.target.value)}
                        placeholder="Full Name"
                        className={`w-full bg-[#27272A] border ${errors.member3_name ? 'border-[#EA580C]' : 'border-[#52525B]/40'} text-white px-3 py-2 rounded-xs font-mono text-xs focus:outline-none`}
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] text-[#52525B] uppercase mb-1">DEPARTMENT</label>
                      <input
                        type="text"
                        value={formData.member3.department}
                        onChange={(e) => handleMemberChange('member3', 'department', e.target.value)}
                        placeholder="Department"
                        className={`w-full bg-[#27272A] border ${errors.member3_department ? 'border-[#EA580C]' : 'border-[#52525B]/40'} text-white px-3 py-2 rounded-xs font-mono text-xs focus:outline-none`}
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] text-[#52525B] uppercase mb-1">YEAR</label>
                      <select
                        value={formData.member3.year}
                        onChange={(e) => handleMemberChange('member3', 'year', e.target.value)}
                        className="w-full bg-[#27272A] border border-[#52525B]/40 text-white px-3 py-2 rounded-xs font-mono text-xs focus:outline-none"
                      >
                        <option value="1st Year">1st Year</option>
                        <option value="2nd Year">2nd Year</option>
                        <option value="3rd Year">3rd Year</option>
                        <option value="4th Year">4th Year</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Member 4 (Optional / Active if teamSize >= 4) */}
              {teamSize >= 4 && (
                <div className="bg-[#18181B] p-4 rounded-xs border border-[#27272A] space-y-4">
                  <span className="font-mono text-xs text-[#F97316] font-bold block uppercase">
                    MEMBER 4 DETAILS
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block font-mono text-[10px] text-[#52525B] uppercase mb-1">NAME</label>
                      <input
                        type="text"
                        value={formData.member4.name}
                        onChange={(e) => handleMemberChange('member4', 'name', e.target.value)}
                        placeholder="Full Name"
                        className={`w-full bg-[#27272A] border ${errors.member4_name ? 'border-[#EA580C]' : 'border-[#52525B]/40'} text-white px-3 py-2 rounded-xs font-mono text-xs focus:outline-none`}
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] text-[#52525B] uppercase mb-1">DEPARTMENT</label>
                      <input
                        type="text"
                        value={formData.member4.department}
                        onChange={(e) => handleMemberChange('member4', 'department', e.target.value)}
                        placeholder="Department"
                        className={`w-full bg-[#27272A] border ${errors.member4_department ? 'border-[#EA580C]' : 'border-[#52525B]/40'} text-white px-3 py-2 rounded-xs font-mono text-xs focus:outline-none`}
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] text-[#52525B] uppercase mb-1">YEAR</label>
                      <select
                        value={formData.member4.year}
                        onChange={(e) => handleMemberChange('member4', 'year', e.target.value)}
                        className="w-full bg-[#27272A] border border-[#52525B]/40 text-white px-3 py-2 rounded-xs font-mono text-xs focus:outline-none"
                      >
                        <option value="1st Year">1st Year</option>
                        <option value="2nd Year">2nd Year</option>
                        <option value="3rd Year">3rd Year</option>
                        <option value="4th Year">4th Year</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 4. Declarations */}
            <div className="pt-4 border-t border-[#27272A] space-y-4">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.confirmStudentBit}
                  onChange={(e) => {
                    setFormData({ ...formData, confirmStudentBit: e.target.checked });
                    if (errors.confirmStudentBit) setErrors({ ...errors, confirmStudentBit: '' });
                  }}
                  className="mt-1 w-4 h-4 bg-[#18181B] border-[#52525B] rounded-xs text-[#F97316] focus:ring-[#F97316]"
                />
                <span className="font-sans text-xs text-[#E4E4E7]">
                  I confirm that all team members are students of Bannari Amman Institute of Technology and that the information provided is accurate.
                </span>
              </label>
              {errors.confirmStudentBit && <span className="font-mono text-[10px] text-[#EA580C] block pl-7">{errors.confirmStudentBit}</span>}

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.agreeRules}
                  onChange={(e) => {
                    setFormData({ ...formData, agreeRules: e.target.checked });
                    if (errors.agreeRules) setErrors({ ...errors, agreeRules: '' });
                  }}
                  className="mt-1 w-4 h-4 bg-[#18181B] border-[#52525B] rounded-xs text-[#F97316] focus:ring-[#F97316]"
                />
                <span className="font-sans text-xs text-[#E4E4E7]">
                  I agree to follow the hackathon rules and organizer instructions.
                </span>
              </label>
              {errors.agreeRules && <span className="font-mono text-[10px] text-[#EA580C] block pl-7">{errors.agreeRules}</span>}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#F97316] hover:bg-[#EA580C] text-[#18181B] font-mono font-bold text-sm uppercase tracking-wider py-4 rounded-xs transition-all flex items-center justify-center gap-3 shadow-xl shadow-[#F97316]/20 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin text-[#18181B]" />
                    SUBMITTING REGISTRATION...
                  </>
                ) : (
                  <>
                    REGISTER TEAM DIRECTLY <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>

          </form>
        )}

      </div>
    </section>
  );
}
