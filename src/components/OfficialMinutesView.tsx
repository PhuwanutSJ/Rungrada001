import React, { useState } from 'react';
import { officialMeetingMinutesMarkdown } from '../data/meetingMinutesDoc';
import { Copy, Check, Printer, Download, BookOpen } from 'lucide-react';

interface OfficialMinutesViewProps {
  onPrint: () => void;
}

export const OfficialMinutesView: React.FC<OfficialMinutesViewProps> = ({ onPrint }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyMinutes = () => {
    navigator.clipboard.writeText(officialMeetingMinutesMarkdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Action Header */}
      <div className="bg-slate-100/90 border-b border-slate-200 px-6 py-3.5 flex flex-wrap items-center justify-between gap-3 print:hidden">
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-amber-700" />
          <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
            เอกสารบันทึกรายงานการประชุมราชการ (ฉบับทางการ)
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyMinutes}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg text-xs font-medium text-slate-700 transition shadow-2xs"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'คัดลอกเอกสารแล้ว' : 'คัดลอกรายงาน'}</span>
          </button>
          <button
            onClick={onPrint}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-medium transition shadow-2xs"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>พิมพ์ / ดาวน์โหลด PDF</span>
          </button>
        </div>
      </div>

      {/* Official Government Layout */}
      <div className="p-8 sm:p-12 max-w-4xl mx-auto space-y-6 text-slate-900 font-['Sarabun',sans-serif]">
        {/* Emblem or Official Header */}
        <div className="text-center space-y-1 pb-4 border-b border-slate-200">
          <div className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
            รายงานการประชุมบุคลากรกลุ่มส่งเสริมการจัดการศึกษา
          </div>
          <div className="text-base sm:text-lg font-semibold text-slate-800">
            สำนักงานเขตพื้นที่การศึกษาประถมศึกษาขอนแก่น เขต 2
          </div>
          <div className="text-sm text-slate-600">
            ครั้งที่ 2/2569 (รอบการประเมินผลการปฏิบัติงาน ครั้งที่ 2/2569)
          </div>
          <div className="text-sm font-medium text-slate-700 pt-1">
            วันจันทร์ที่ 14 กันยายน พ.ศ. 2569 เวลา 09.30 น.
          </div>
          <div className="text-xs text-slate-500">
            ณ ห้องประชุมกลุ่มส่งเสริมการจัดการศึกษา สพป.ขอนแก่น เขต 2
          </div>
        </div>

        {/* Attendees Section */}
        <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80">
          <h4 className="text-sm font-bold text-slate-900 mb-3 border-b border-slate-200 pb-1.5">
            ผู้มาประชุม (จำนวน 9 ท่าน):
          </h4>
          <ol className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-800 list-decimal list-inside">
            <li><strong>รองผู้อำนวยการ สพป.ขอนแก่น เขต 2</strong> (ประธานในที่ประชุม)</li>
            <li><strong>นางสาวอ้อย</strong> ผู้อำนวยการกลุ่มส่งเสริมการจัดการศึกษา</li>
            <li><strong>นางศิริพร เข่นขันตรี</strong> นักวิชาการศึกษาชำนาญการพิเศษ</li>
            <li><strong>นางภัทรินทร์ อภัยศรี</strong> นักวิชาการศึกษาชำนาญการ</li>
            <li><strong>นางภาวลินทร์ บุบผาจันทโท</strong> นักวิชาการศึกษาชำนาญการ</li>
            <li><strong>นายวิเชียร ธนพัชรวิณ</strong> นักวิชาการศึกษาชำนาญการ</li>
            <li><strong>นางสาวนงนุชตรา ศรีจันทร์</strong> นักวิชาการศึกษาปฏิบัติการ</li>
            <li><strong>นายอิทธิเดช</strong> นักวิชาการศึกษา (งานลูกเสือ)</li>
            <li><strong>นายทัศนวิน ธนพัชรวินทร์</strong> เจ้าพนักงานธุรการปฏิบัติงาน</li>
          </ol>
        </div>

        {/* Agendas */}
        <div className="space-y-6 pt-2">
          {/* Agenda 1 */}
          <section className="space-y-2">
            <h4 className="text-base font-bold text-slate-900 bg-amber-500/10 text-amber-950 px-3 py-1.5 rounded-lg border-l-4 border-amber-600">
              ระเบียบวาระที่ 1: เรื่องที่ประธานแจ้งให้ที่ประชุมทราบ
            </h4>
            <div className="text-sm leading-relaxed text-slate-800 pl-3 space-y-2">
              <p>
                <strong>1.1 การขับเคลื่อนนโยบาย Thailand Zero Dropout:</strong> ประธานแจ้งข้อมูลภาพรวมระดับประเทศมีเด็กหลุดจากระบบการศึกษาลดลงเหลือ 6 แสนกว่าคน โดยกระทรวงศึกษาธิการแบ่งเป็น 3 ช่วงวัย (แรกเกิด-6 ปี, 6-15 ปี, 16-18 ปี) ในส่วนของ สพป.ขอนแก่น เขต 2 มีข้อมูลเด็กกลุ่มเสี่ยง Zero Dropout ประมาณ 132 คน มอบหมายให้ประสานงานร่วมกับ กสศ., สกร. และองค์กรปกครองส่วนท้องถิ่นในการติดตามดูแล
              </p>
              <p>
                <strong>1.2 มาตรการความปลอดภัยในสถานศึกษาและการเฝ้าระวังข่าวสารเชิงรุก:</strong> ให้ติดตามข้อมูลและข่าวสารแบบ Real-time เช่น กรณีบุคคลภายนอกเข้าพื้นที่สถานศึกษาที่ ร.ร.บ้านเสือเฒ่า และค่ายอาสาที่ อ.ชนบท และเริ่มวางระบบการสื่อสารและติดตามข่าวสารเชิงรุกตั้งแต่วันที่ 1 ตุลาคม 2569
              </p>
              <p>
                <strong>1.3 การเตรียมความพร้อมสู่ระบบ e-Office 100%:</strong> กำหนดเริ่มทดสอบระบบ 50/50 ในวันที่ 21 กันยายน 2569 และพร้อมใช้งานเต็มรูปแบบ 100% ทั้งสำนักงานเขตในวันที่ 28 กันยายน 2569
              </p>
              <p>
                <strong>1.4 การประเมินผลงานและปรับปรุงสำนักงาน:</strong> รองผู้อำนวยการเขตเตรียมส่งเล่มผลงาน 2-4 ตุลาคม 2569 และมอบหมายให้จัดทำป้ายศูนย์แนะแนว ศูนย์การเรียนรู้ ศูนย์พิทักษ์สิทธิเด็ก ศูนย์ พสน. หน้าห้องกลุ่มส่งเสริมฯ
              </p>
              <div className="text-xs font-semibold text-slate-700 bg-slate-100 p-2 rounded-md">
                มติที่ประชุม: ที่ประชุมรับทราบและมอบหมายผู้เกี่ยวข้องดำเนินการ
              </div>
            </div>
          </section>

          {/* Agenda 2 */}
          <section className="space-y-2">
            <h4 className="text-base font-bold text-slate-900 bg-amber-500/10 text-amber-950 px-3 py-1.5 rounded-lg border-l-4 border-amber-600">
              ระเบียบวาระที่ 2: เรื่องรับรองรายงานการประชุมครั้งที่แล้ว
            </h4>
            <div className="text-sm leading-relaxed text-slate-800 pl-3 space-y-2">
              <p>
                นางสาวนงนุชตรา ศรีจันทร์ เสนอรายงานการประชุมครั้งที่ 1/2569 เมื่อวันที่ 13 สิงหาคม 2569 ณ ห้องประชุมทิพย์ธำรง โดยประธานในที่ประชุมให้ปรับแก้ 2 ประเด็น:
              </p>
              <ul className="list-disc list-inside pl-2 space-y-1 text-xs sm:text-sm">
                <li>ระบุหมายเหตุท้ายชื่อ นางภัทรินทร์ อภัยศรี ในส่วนผู้ไม่มาประชุมว่า "(ไปราชการ กทม.)"</li>
                <li>ปรับปรุงถ้อยคำภาษาพูด เช่น "พูดว่า" ให้แก้ไขเป็นภาษาหนังสือราชการ ได้แก่ "แจ้งว่า / เสนอว่า / ชี้แจงว่า"</li>
              </ul>
              <div className="text-xs font-semibold text-slate-700 bg-slate-100 p-2 rounded-md">
                มติที่ประชุม: ที่ประชุมมีมติรับรองรายงานการประชุมครั้งที่ 1/2569 โดยมีข้อแก้ไขตามที่ประธานเสนอ
              </div>
            </div>
          </section>

          {/* Agenda 3 */}
          <section className="space-y-3">
            <h4 className="text-base font-bold text-slate-900 bg-amber-500/10 text-amber-950 px-3 py-1.5 rounded-lg border-l-4 border-amber-600">
              ระเบียบวาระที่ 3: เรื่องเสนอเพื่อทราบ (รายงานผลการปฏิบัติงานรอบที่ 2)
            </h4>
            <div className="text-sm leading-relaxed text-slate-800 pl-3 space-y-3">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <h5 className="font-bold text-slate-900">3.1 นายอิทธิเดช (เปิ้ล) – งานส่งเสริมลูกเสือและยุวกาชาด</h5>
                <p className="text-xs sm:text-sm mt-1">
                  รายงานการไปปฏิบัติหน้าที่งานชุมนุมลูกเสือมาเลเซียแห่งชาติ ครั้งที่ 15 ณ รัฐปีนัง (7 วัน), โรงเรียนบ้านป่าแงวหนองอี ได้รับเลือกเป็นตัวแทนระดับประเทศโครงการ Life Leader (ลูกเสือ 100 คน) และการจัดทำฐานข้อมูลลูกเสือเขตผ่าน Google Forms คืบหน้า 80% (ประธานสั่งการให้ฟื้นฟูค่ายลูกเสือเขต และจัดอบรมลูกเสือจิตอาสาพระราชทานเชิงรุก)
                </p>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <h5 className="font-bold text-slate-900">3.2 นางศิริพร เข่นขันตรี (พี่โอ๋) – งานความปลอดภัยและระบบดูแลช่วยเหลือนักเรียน</h5>
                <p className="text-xs sm:text-sm mt-1">
                  โรงเรียนสีขาวปลอดยาเสพติดผ่านการประเมิน 92 โรงเรียน (เพชร 38, รักษามาตรฐานเพชรปี 2-3 รวม 6, ทอง 30, เงิน 18), จัดค่ายสร้างสรรค์ปันสุข (100 คน) และ To Be Number One / YC (100 คน), เตรียมจัดอบรม พสน. วันที่ 18 ก.ย. 69 (60 คน), กำกับโรงเรียนออกเยี่ยมบ้าน 100% บันทึกลงระบบ HERO OBEC CARE (21 ก.ค. - 30 ต.ค. 69) (ประธานสั่งการให้แยกกลุ่มเสี่ยง 4 สี เขียว/เหลือง/ส้ม/แดง เพื่อช่วยเหลือได้ตรงจุด)
                </p>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <h5 className="font-bold text-slate-900">3.3 นางภัทรินทร์ อภัยศรี (น้องริน) – งาน อพ.สธ., ปพ.3 ออนไลน์, คณะกรรมการสถานศึกษา</h5>
                <p className="text-xs sm:text-sm mt-1">
                  จัดอบรมสวนพฤกษศาสตร์โรงเรียน (อพ.สธ.) 20 โรงเรียน ร่วมกับ มทร.อีสาน, จัดสรรงบเบี้ยประชุมคณะกรรมการสถานศึกษาฯ 2 ครั้ง, ดำเนินการระบบ ปพ.3 ออนไลน์ คืบหน้า 99.20% (เหลือแก้ไข 2 โรงเรียน) (ประธานสั่งการต่อยอด อพ.สธ. สู่อาชีพเพาะพันธุ์กล้าไม้มีค่า เช่น ยางนา มะค่าโมง และเน้นย้ำความปลอดภัยในการสำรองข้อมูล ปพ.3)
                </p>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <h5 className="font-bold text-slate-900">3.4 นางภาวลินทร์ บุบผาจันทโท – งานส่งเสริมสุขภาพ, โภชนาการ และการศึกษา ม.12</h5>
                <p className="text-xs sm:text-sm mt-1">
                  แจกจ่ายยาทาตุ่มขาว 1,200 ขวด, ร.ร.ปลอดไข้เลือดออก 13 แห่ง, ร.ร.ผู้พิทักษ์ฟันดี 4 แห่ง, การศึกษา ม.12 ศูนย์การเรียนบ้านสวนป่าสุดใจ (นร. ม.6 จำนวน 4 ราย ขอ ปพ.1 ต่อระดับอุดมศึกษา) และบ้านเรียนจินวรรธน์ยา Homeschool 1 ราย (เงินอุดหนุน 5,270 บาท), การดำเนินงานโครงการอาหารกลางวันและติดตามเด็กทุพโภชนาการ 14 โรงเรียน (ประธานสั่งการให้ทำ Timeline ติดตามเด็กทุพโภชนาการทั้ง 205 โรงเรียน)
                </p>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <h5 className="font-bold text-slate-900">3.5 นายวิเชียร ธนพัชรวิณ (พี่กี้) – งานรับนักเรียน, สภานักเรียน และ Credit Bank</h5>
                <p className="text-xs sm:text-sm mt-1">
                  รับนักเรียนอนุบาล 3 ขวบ และจำหน่ายนักเรียนไป สกร., คัดเลือกสภานักเรียนต้นแบบ (ร.ร.บ้านซำจานซำไผ่ และ ร.ร.เบญจมิตรวิทยาคม), งานธนาคารหน่วยกิต (Credit Bank) MOU ร่วมกับ 5 วิทยาลัยอาชีวะ มี 16 โรงเรียนเข้าร่วม, ทุนหารายได้ระหว่างเรียนช่วงปิดเทอม 3 ราย (ประธานสั่งการส่งเสริมระบบสะสมหน่วยกิตให้เห็นผลเป็นรูปธรรม)
                </p>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <h5 className="font-bold text-slate-900">3.6 นางสาวนงนุชตรา ศรีจันทร์ (น้องชมพู่) – งาน กสศ., CCT นักเรียนยากจน และสารบรรณ</h5>
                <p className="text-xs sm:text-sm mt-1">
                  ส่งต่อนักเรียนไป สกร. 14 คน, รายงานระบบ CCT ปัจจัยพื้นฐานนักเรียนยากจน: นักเรียนในสังกัด 205 โรงเรียน มีสิทธิ์คัดกรอง 16,383 คน เป็นนักเรียนยากจน 15,271 คน (93.2%), ทุนต่อเนื่อง กสศ. 7,526 คน, คัดกรองใหม่เทอม 1/69 จำนวน 7,745 คน (ครบ 100% 200 โรงเรียน, ไม่ครบ 5 โรงเรียน), ผ่านเกณฑ์ยากจนพิเศษ 3,985 คน, ผ่านเกณฑ์ยากจน สพฐ. 1,360 คน, งานสารบรรณรับส่งหนังสือระบบ AMSS 20 เรื่อง/วัน (ประธานกำชับติดตาม 5 โรงเรียนให้คัดกรองเสร็จสิ้นทันกำหนด)
                </p>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <h5 className="font-bold text-slate-900">3.7 นายทัศนวิน ธนพัชรวินทร์ – งานธุรการ</h5>
                <p className="text-xs sm:text-sm mt-1">
                  ปฏิบัติงานตามคำสั่ง 307/2569 รวม 10 รายการงาน ศึกษาองค์ความรู้เทคโนโลยีเพื่อพัฒนางาน e-Office และงานลูกเสือยุวกาชาด
                </p>
              </div>

              <div className="text-xs font-semibold text-slate-700 bg-slate-100 p-2 rounded-md">
                มติที่ประชุม: ที่ประชุมรับทราบผลการปฏิบัติงานของบุคลากรทุกคน
              </div>
            </div>
          </section>

          {/* Agenda 4 */}
          <section className="space-y-2">
            <h4 className="text-base font-bold text-slate-900 bg-amber-500/10 text-amber-950 px-3 py-1.5 rounded-lg border-l-4 border-amber-600">
              ระเบียบวาระที่ 4: เรื่องอื่นๆ และข้อสั่งการปิดการประชุม
            </h4>
            <div className="text-sm leading-relaxed text-slate-800 pl-3 space-y-2">
              <p>
                ประธานกล่าวขอบคุณบุคลากรทุกคนที่ทุ่มเทปฏิบัติงานอย่างเข้มแข็ง กำชับให้จัดทำเล่มรายงานผลการปฏิบัติงานรอบที่ 2 ให้สมบูรณ์ และเตรียมพร้อมสู่ระบบ e-Office 100% ในวันที่ 28 กันยายน 2569
              </p>
            </div>
          </section>
        </div>

        {/* Closing */}
        <div className="pt-6 border-t border-slate-200 flex justify-between items-center text-xs sm:text-sm text-slate-600">
          <div>เลิกประชุมเวลา 12.00 น.</div>
          <div className="text-right">
            <div>(ลงชื่อ) ........................................................... ผู้จดรายงานการประชุม</div>
            <div className="text-xs text-slate-500 mt-1">(นางสาวนงนุชตรา ศรีจันทร์) นักวิชาการศึกษาปฏิบัติการ</div>
          </div>
        </div>
      </div>
    </div>
  );
};
