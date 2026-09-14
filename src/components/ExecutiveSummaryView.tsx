import React from 'react';
import { keyStatistics, speakers } from '../data/meetingData';
import { Calendar, CheckCircle, ShieldAlert, Award, TrendingUp, HeartHandshake, Laptop, Users } from 'lucide-react';

export const ExecutiveSummaryView: React.FC = () => {
  const timelineMilestones = [
    { date: '18 ก.ย. 2569', title: 'อบรม พสน. และระบบ Red Box', desc: 'อบรมทบทวนความรู้เจ้าหน้าที่ พสน. 60 คน และมอบรางวัลเชิดชูเกียรติ พสน. ดีเด่น 10 ราย' },
    { date: '21 ก.ย. 2569', title: 'ทดสอบระบบ e-Office 50/50', desc: 'ทดลองใช้งานระบบงานสารบรรณอิเล็กทรอนิกส์ e-Office คู่ขนาน' },
    { date: '28 ก.ย. 2569', title: 'เริ่มใช้งาน e-Office 100%', desc: 'เข้าสู่ระบบ e-Office เต็มรูปแบบทั้งสำนักงานเขตพื้นที่การศึกษา' },
    { date: '1 ต.ค. 2569', title: 'เริ่มต้นปีงบประมาณ 2570 & สรุปผล e-Office', desc: 'ประเมินสรุปผล e-Office และเริ่มแผนปฏิบัติการเชิงรุกด้านข่าวสารความปลอดภัย' },
    { date: '2-4 ต.ค. 2569', title: 'ส่งเล่มผลงานรอง ผอ.เขต', desc: 'รองผู้อำนวยการเขตทั้ง 3 ท่านนำส่งเล่มผลงานการประเมิน' },
    { date: '30 ต.ค. 2569', title: 'สิ้นสุดการบันทึก HERO OBEC CARE & กสศ.', desc: 'กำหนดส่งข้อมูลการเยี่ยมบ้าน 100% และการเบิกจ่าย/คืนเงินทุนเสมอภาค กสศ.' },
  ];

  const missions = [
    {
      title: '1. ระบบหลักประกันโอกาสทางการศึกษา (กสศ. & CCT)',
      responsible: 'นางสาวนงนุชตรา ศรีจันทร์ (ชมพู่)',
      highlight: 'นักเรียนยากจน 15,271 คน (93.2%) จาก 16,383 คน ใน 205 โรงเรียน',
      details: 'คัดกรอง นร.01 ครบ 100% แล้ว 200 โรงเรียน (7,577 คน) เหลือติดตาม 5 โรงเรียน, ทุนต่อเนื่อง กสศ. 7,526 คน, ทุนยากจนพิเศษ 3,985 คน',
      badge: 'สำคัญเร่งด่วน',
      color: 'border-rose-200 bg-rose-50/50 text-rose-900',
    },
    {
      title: '2. ความปลอดภัยในสถานศึกษา & ปัญหายาเสพติด (MOE Safety / ร.ร.สีขาว)',
      responsible: 'นางศิริพร เข่นขันตรี (พี่โอ๋)',
      highlight: 'โรงเรียนสีขาวปลอดยาเสพติดผ่านเกณฑ์ 92 โรงเรียน (ระดับเพชร 38 แห่ง)',
      details: 'ค่ายสร้างสรรค์ปันสุข (100 คน), To Be Number One & YC (100 คน), อบรม พสน. & Red Box 18 ก.ย. (60 คน), ติดตามเยี่ยมบ้าน 100% ลง HERO OBEC CARE',
      badge: 'นโยบายหลัก',
      color: 'border-amber-200 bg-amber-50/50 text-amber-900',
    },
    {
      title: '3. กิจการลูกเสือและยุวกาชาด (Malaysia Jamboree & Life Leader)',
      responsible: 'นายอิทธิเดช (เปิ้ล)',
      highlight: 'ร.ร.บ้านป่าแงวหนองอี ตัวแทนประเทศโครงการ Life Leader (ลูกเสือ 100 คน)',
      details: 'ร่วมงานชุมนุมลูกเสือมาเลเซียแห่งชาติ ครั้งที่ 15 ณ รัฐปีนัง, จัดทำ Data บุคลากรลูกเสือผ่าน Google Forms สำเร็จ 80%, เตรียมฟื้นฟูค่ายลูกเสือเขต',
      badge: 'ผลงานเด่น',
      color: 'border-blue-200 bg-blue-50/50 text-blue-900',
    },
    {
      title: '4. งานทะเบียน ปพ.3 ออนไลน์ & โครงการ อพ.สธ. สวนพฤกษศาสตร์',
      responsible: 'นางภัทรินทร์ อภัยศรี (น้องริน)',
      highlight: 'ปพ.3 ออนไลน์ของเขตสำเร็จแล้ว 99.20% (เหลือปรับปรุง 2 โรงเรียน)',
      details: 'สวนพฤกษศาสตร์โรงเรียน 20 โรงเรียน ร่วมกับ มทร.อีสาน ต่อยอดเพาะกล้าไม้ยางนา มะค่าโมง สู่อาชีพนักเรียน, จัดสรรเบี้ยประชุมกรรมการสถานศึกษา 2 รอบ',
      badge: 'ระบบดิจิทัล',
      color: 'border-emerald-200 bg-emerald-50/50 text-emerald-900',
    },
    {
      title: '5. สุขภาพอนามัย, อาหารกลางวัน & การศึกษาตามมาตรา 12',
      responsible: 'นางภาวลินทร์ บุบผาจันทโท',
      highlight: 'ศูนย์การเรียนบ้านสวนป่าสุดใจ (ม.6 ต่อ ป.ตรี 4 คน) & โฮมสคูลจินวรรธน์ยา 1 คน',
      details: 'แจกจ่ายยาทาตุ่มขาว 1,200 ขวด, ร.ร. ปลอดไข้เลือดออก 13 แห่ง, ร.ร. ผู้พิทักษ์ฟันดี 4 แห่ง, จัดการทุพโภชนาการ (เด็กผอม/อ้วน) ผ่าน School Lunch System 14 แห่ง',
      badge: 'คุ้มครองสิทธิ',
      color: 'border-teal-200 bg-teal-50/50 text-teal-900',
    },
    {
      title: '6. การรับนักเรียน, สภานักเรียน & ธนาคารหน่วยกิต (Credit Bank)',
      responsible: 'นายวิเชียร ธนพัชรวิณ (พี่กี้)',
      highlight: 'ธนาคารหน่วยกิต MOU ร่วมกับ 5 วิทยาลัยอาชีวะ ขับเคลื่อนใน 16 โรงเรียน',
      details: 'สภานักเรียนต้นแบบ (ร.ร.บ้านซำจานซำไผ่ และ ร.ร.เบญจมิตรวิทยาคม), รับนักเรียนอนุบาล 3 ขวบ, จำหน่ายนักเรียนไป สกร. 14 คน, ทุนหารายได้ระหว่างเรียน 3 คน',
      badge: 'เชื่อมโยงอาชีพ',
      color: 'border-purple-200 bg-purple-50/50 text-purple-900',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Overview Intro Banner */}
      <div className="bg-linear-to-r from-slate-900 via-slate-800 to-amber-950 text-white p-6 sm:p-8 rounded-2xl shadow-md border border-slate-700/60">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-semibold mb-3">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>สรุปผลการปฏิบัติงานรอบที่ 2 (1 เม.ย. – 30 ก.ย. 2569)</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-2">
            ภาพรวมการขับเคลื่อน 13 ภารกิจหลัก กลุ่มส่งเสริมการจัดการศึกษา สพป.ขอนแก่น เขต 2
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            การประชุมครั้งนี้มุ่งเน้นการติดตามนโยบาย Thailand Zero Dropout (มีเด็กกลุ่มเสี่ยง 132 คน), การแก้ปัญหาความยากจนผ่านระบบ CCT กสศ. (มีนักเรียนยากจนสูงถึง 93.2%), การสร้างมาตรการความปลอดภัยเชิงรุก, การคุ้มครองสิทธิเด็กผ่านระบบ HERO OBEC CARE และการเปลี่ยนผ่านสู่สำนักงานไร้กระดาษ e-Office 100% ภายใน 28 กันยายน 2569
          </p>
        </div>
      </div>

      {/* Grid of Key Missions & Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {missions.map((m, idx) => (
          <div key={idx} className={`p-5 rounded-2xl border shadow-xs ${m.color}`}>
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="font-bold text-sm sm:text-base leading-snug">{m.title}</h3>
              <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-white/80 border border-current shadow-2xs shrink-0">
                {m.badge}
              </span>
            </div>
            <div className="text-xs font-semibold opacity-85 mb-2">
              ผู้รับผิดชอบ: {m.responsible}
            </div>
            <div className="bg-white/90 rounded-xl p-3 border border-slate-200/60 mb-2">
              <div className="text-xs font-bold text-slate-900 mb-0.5">จุดเน้นสำคัญ:</div>
              <div className="text-xs text-slate-700 leading-relaxed font-medium">{m.highlight}</div>
            </div>
            <p className="text-xs opacity-90 leading-relaxed">{m.details}</p>
          </div>
        ))}
      </div>

      {/* Timeline Section */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-100">
          <Calendar className="w-5 h-5 text-amber-600" />
          <h3 className="text-base font-bold text-slate-900">
            ปฏิทินและกำหนดเวลาสำคัญ (Timeline & Key Deadlines)
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {timelineMilestones.map((item, i) => (
            <div key={i} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-amber-400/50 transition">
              <div className="text-xs font-bold text-amber-700 font-mono mb-1">{item.date}</div>
              <div className="text-sm font-bold text-slate-900 mb-1">{item.title}</div>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
