import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../redux/actions/todo-action';

const InputTodo = ({ onAddTodo, todos }) => {
  const [valueInput, setValueInput] = useState('');

  useEffect(() => {
    // Mengambil nilai terakhir dari daftar todos untuk nilai input
    // useEffect memastikan bahwa input valueInput akan selalu menampilkan nilai terakhir yang dimasukkan atau diubah karena valueInput akan diubah oleh EditForm
    if (todos.length > 0) {
      const lastTodo = todos[todos.length - 1];
      setValueInput('');

    }
  }, [todos]);

  const handleChange = (e) => {
    setValueInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newValueInput = { valueInput, complete: false, id: Date.now() };
    onAddTodo(newValueInput);

    setValueInput('');
  };

  return (
    <div className='input-todo-wrapper'>

   
    <form onSubmit={handleSubmit} className="form">
      <div>
        <input type="text" placeholder="write here" value={valueInput} onChange={handleChange} />
      </div>
      <div className="costume-add">
        <button>
          Add
        </button>
      </div>
    </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddTodo: (todo) => dispatch(addTodo(todo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputTodo);


























/*
mengubah state lokal ke redux agar bisa dibagikan ke component yang lain

1.hubungkan InputTodo dengan redux pake connect 
2.
*/

// ketika add di submit maka kita akan mendapatkan isi value dari input
// 1.Impor React dan gunakan state hook
// 2. Buat event handler untuk mengambil nilai input
// 3.Buat event handler untuk menangani submit form
// 4.Terapkan event handler ke elemen input dan form

/*
NOTE:
-handleChange dapat berfungsi ganda: mengambil nilai dari input dan memperbarui state 

1.Fungsi ini meng-update state yang menyimpan nilai dari input setiap kali pengguna mengetik di dalam input tersebut
onChange=mengambil nilai input,menyimpan distate,cara cek udah tersimpan apa belum tampilin aja statenya
2.bertanggung jawab untuk memperbarui nilai state pada komponen React setiap kali nilai dari elemen input berubah



-handleSubmit: menyimpan input ke database,atau ke state lain atau jalanin logika

1.Fungsi ini bisa digunakan untuk melakukan tindakan tertentu saat form dikirim, 
2.seperti menyimpan nilai input ke dalam database atau menjalankan logika lainnya
3.menangani data yang sudah di-input oleh pengguna, misalnya menyimpannya ke dalam state lain, melakukan pengiriman data ke server, atau menjalankan logika lainnya yang terkait dengan data yang sudah lengkap atau siap untuk disimpan

*/
