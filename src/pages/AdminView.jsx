import { useState } from 'react';
import { 
  BarChart3, Users, BookOpen, DollarSign, TrendingUp, Trash2, Ban, 
  CheckCircle, Activity, PieChart as PieIcon, Megaphone, Settings, 
  Search, Edit, Download, ArrowDownLeft, ArrowUpRight, CheckCircle2,
  Plus, ShieldCheck, UserCircle
} from 'lucide-react';
import { formatMoney } from '../utils/helpers';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer, CartesianGrid, PieChart, Pie, Cell } from 'recharts';

const AdminView = ({ courses, stats, onDeleteCourse, onAddNewCourse, page }) => {
  const activeTab = page === 'home' ? 'dashboard' : page; 

  // DỮ LIỆU NGƯỜI DÙNG MẪU (Mock Data)
  const mockUsers = [
    { id: 1, name: "Nguyễn Văn A", email: "student.a@gmail.com", role: "student", status: "Active", joined: "20/12/2025" },
    { id: 2, name: "Trần Thị B", email: "teacher.b@studyhub.com", role: "teacher", status: "Active", joined: "15/11/2025" },
    { id: 3, name: "Lê Văn C", email: "admin.c@studyhub.com", role: "admin", status: "Active", joined: "01/01/2025" },
    { id: 4, name: "Phạm Minh D", email: "student.d@gmail.com", role: "student", status: "Banned", joined: "05/12/2025" },
    { id: 5, name: "Hoàng Gia E", email: "teacher.e@studyhub.com", role: "teacher", status: "Pending", joined: "02/01/2026" },
  ];

  const platformRevenue = stats.revenue * 0.2; 
  const totalRevenue = stats.revenue;
  const chartData = [ { name: 'T1', value: totalRevenue * 0.2 }, { name: 'T2', value: totalRevenue * 0.5 }, { name: 'T3', value: totalRevenue * 0.7 }, { name: 'Hiện tại', value: totalRevenue } ];
  const pieData = [ { name: 'Sàn (20%)', value: 20 }, { name: 'GV (80%)', value: 80 } ];

  return (
    <div className="space-y-8 animate-fade-in-up pb-10">
      {/* HEADER */}
      <div className="flex justify-between items-center bg-white p-6 rounded-3xl shadow-sm border border-slate-200">
        <div>
            <span className="text-xs font-black text-indigo-600 uppercase tracking-widest bg-indigo-50 px-2 py-1 rounded">CEO Workspace</span>
            <h2 className="text-4xl font-black text-slate-900 mt-2">
                {activeTab === 'dashboard' ? 'Tổng Quan Hệ Thống' : 
                 activeTab === 'finance' ? 'Quản Lý Tài Chính' : 
                 activeTab === 'users' ? 'Quản Lý Người Dùng' : 'Marketing & Cấu Hình'}
            </h2>
        </div>

        {/* NÚT KHỞI TẠO: Chỉ hiển thị khi ở Dashboard */}
        {activeTab === 'dashboard' && (
          <button 
            onClick={onAddNewCourse}
            className="flex items-center gap-2 bg-slate-900 text-white px-6 py-4 rounded-2xl font-black text-sm hover:bg-indigo-600 hover:scale-105 transition-all shadow-xl shadow-slate-200"
          >
            <Plus size={20} strokeWidth={3}/>
            KHỞI TẠO KHÓA HỌC MỚI
          </button>
        )}
      </div>

      {/* NỘI DUNG TỪNG TAB */}
      {activeTab === 'dashboard' && (
        <>
          {/* GIỮ NGUYÊN PHẦN STATS CARDS VÀ CHART CỦA BẠN TẠI ĐÂY */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
             <div className="p-6 rounded-[24px] bg-indigo-600 text-white shadow-xl shadow-indigo-200">
               <div className="flex justify-between mb-4"><DollarSign className="opacity-80"/><span className="bg-white/20 px-2 py-1 rounded text-xs font-bold">+24%</span></div>
               <h3 className="text-3xl font-black">{formatMoney(totalRevenue || 0)}</h3>
               <p className="text-indigo-200 text-sm font-medium">Tổng GMV</p>
             </div>
             {/* ... (Các card khác tương tự) */}
          </div>
          
          {/* Chart Section - Giữ nguyên code Recharts của bạn */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
             {/* ... (Code biểu đồ AreaChart và PieChart) */}
          </div>
        </>
      )}

      {/* FINANCE TAB - Giữ nguyên code bảng giao dịch của bạn */}
      {activeTab === 'finance' && (
          <div className="bg-white rounded-[32px] border border-slate-200 overflow-hidden shadow-sm">
             {/* ... (Code table giao dịch) */}
          </div>
      )}

      {/* USERS TAB - ĐÃ THÊM DỮ LIỆU THẬT */}
      {activeTab === 'users' && (
        <div className="bg-white rounded-[32px] border border-slate-200 overflow-hidden shadow-sm">
           <div className="p-6 border-b border-slate-100 flex gap-4">
              <div className="flex-1 bg-slate-50 rounded-xl px-4 py-3 flex items-center gap-3">
                <Search className="text-slate-400"/>
                <input placeholder="Tìm kiếm tên, email hoặc vai trò..." className="bg-transparent outline-none w-full font-bold text-slate-600"/>
              </div>
           </div>
           
           <div className="overflow-x-auto">
             <table className="w-full text-left">
               <thead className="bg-slate-50 text-slate-500 text-xs uppercase font-extrabold tracking-wider">
                 <tr>
                   <th className="p-6">Thành viên</th>
                   <th className="p-6">Vai trò</th>
                   <th className="p-6">Ngày tham gia</th>
                   <th className="p-6">Trạng thái</th>
                   <th className="p-6 text-right">Thao tác</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-slate-100">
                 {mockUsers.map((user) => (
                   <tr key={user.id} className="hover:bg-slate-50/50 transition-colors">
                     <td className="p-6">
                       <div className="flex items-center gap-3">
                         <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white shadow-sm ${user.role === 'admin' ? 'bg-slate-900' : user.role === 'teacher' ? 'bg-purple-500' : 'bg-indigo-500'}`}>
                           {user.name.charAt(0)}
                         </div>
                         <div>
                           <p className="font-bold text-slate-800">{user.name}</p>
                           <p className="text-xs text-slate-400">{user.email}</p>
                         </div>
                       </div>
                     </td>
                     <td className="p-6">
                       <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider ${
                         user.role === 'admin' ? 'bg-slate-100 text-slate-700' : 
                         user.role === 'teacher' ? 'bg-purple-50 text-purple-600' : 'bg-blue-50 text-blue-600'
                       }`}>
                         {user.role}
                       </span>
                     </td>
                     <td className="p-6 text-sm text-slate-500 font-medium">{user.joined}</td>
                     <td className="p-6">
                       <span className={`flex items-center gap-1.5 text-xs font-bold ${
                         user.status === 'Active' ? 'text-emerald-600' : 
                         user.status === 'Banned' ? 'text-rose-500' : 'text-orange-500'
                       }`}>
                         <div className={`w-1.5 h-1.5 rounded-full ${user.status === 'Active' ? 'bg-emerald-500' : user.status === 'Banned' ? 'bg-rose-500' : 'bg-orange-500'}`}/>
                         {user.status}
                       </span>
                     </td>
                     <td className="p-6 text-right flex justify-end gap-2">
                       <button className="p-2 bg-slate-100 rounded-lg hover:text-indigo-600 transition-colors" title="Chỉnh sửa"><Edit size={16}/></button>
                       <button className={`p-2 rounded-lg transition-colors ${user.status === 'Banned' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-500 hover:bg-rose-100'}`} title={user.status === 'Banned' ? "Gỡ chặn" : "Chặn người dùng"}>
                         {user.status === 'Banned' ? <CheckCircle size={16}/> : <Ban size={16}/>}
                       </button>
                     </td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
        </div>
      )}

      {/* MARKETING VÀ SETTINGS - Giữ nguyên như cũ */}
      {/* ... */}
    </div>
  );
};

export default AdminView;