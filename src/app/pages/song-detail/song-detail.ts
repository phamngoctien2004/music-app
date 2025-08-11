import {Component, ElementRef, HostListener, input, output, ViewChild} from '@angular/core';
import {Header} from '../../components/header/header';

@Component({
  selector: 'app-song-detail',
  imports: [
    Header
  ],
  templateUrl: './song-detail.html',
  standalone: true,
  styleUrl: './song-detail.css'
})
export class SongDetail {
  isPlaying = input<boolean>(false);
  toggleRequested = output<void>();
  expanded = false;
  ontoggle() {

  }
  lyrics= "Về về về nơi này\n" +
    "Chúng ta không thuộc về nhau\n" +
    "Chúng ta không thuộc về\n" +
    "Về về về nơi này\n" +
    "Niềm tin đã mất,\n" +
    "Giọt nước mắt cuốn ký ức anh chìm sâu\n" +
    "Tình về nơi đâu,\n" +
    "Cô đơn đôi chân\n" +
    "Lạc trôi giữa bầu trời\n" +
    "Màn đêm che giấu\n" +
    "Từng góc tối khuất lấp\n" +
    "Phía sau bờ môi\n" +
    "Tại vì anh thôi\n" +
    "Yêu say mê nên đôi khi quá dại khờ\n" +
    "Nhắm mắt ơ thờ\n" +
    "Anh không muốn lạc vào trong nỗi đau này\n" +
    "Phía trước, bây giờ\n" +
    "Ai đang nắm chặt bàn tay của em vậy\n" +
    "Mông lung như một trò đùa\n" +
    "Anh xin giơ tay rút lui thôi\n" +
    "Do ai\n" +
    "Trách ai bây giờ đây\n" +
    "Chúng ta không thuộc về nhau\n" +
    "Chúng ta không thuộc về nhau\n" +
    "Chúng ta không thuộc về nhau\n" +
    "Em hãy cứ đi bên người mà em cần\n" +
    "Trái tim không thuộc về nhau\n" +
    "Giấc mơ không là của nhau\n" +
    "Xóa câu ca buồn chiều mưa\n" +
    "Anh lỡ xóa luôn yêu thương ngày xưa rồi\n" +
    "Chúng ta không thuộc về nhau\n" +
    "Chúng ta không thuộc về\n" +
    "Về về về nơi này\n" +
    "Chúng ta không thuộc về nhau\n" +
    "Chúng ta không thuộc về\n" +
    "Về về về nơi này\n" +
    "Hey, từng đêm qua\n" +
    "Cơn mưa bao vây chia rời đôi ta\n" +
    "Em, ngày hôm qua\n" +
    "Cuốn gió theo mây đi về nơi xa\n" +
    "Trời xanh rộng bao la\n" +
    "Anh lê đôi chân mình bơ vơ, lang thang\n" +
    "Có lẽ em đang yên vui bên nhân tình\n" +
    "Quên đi để anh nhớ\n" +
    "Hơi men để anh mơ\n" +
    "Nơi đâu để anh giấu\n" +
    "Một nỗi buồn vào trong thơ\n" +
    "Nhắm mắt ơ thờ\n" +
    "Anh không muốn lạc vào trong nỗi đau này\n" +
    "Phía trước, bây giờ\n" +
    "Ai đang nắm chặt bàn tay của em vậy\n" +
    "Mông lung như một trò đùa\n" +
    "Anh xin giơ tay rút lui thôi\n" +
    "Do ai\n" +
    "Trách ai bây giờ đây\n" +
    "Chúng ta không thuộc về nhau\n" +
    "Chúng ta không thuộc về nhau\n" +
    "Chúng ta không thuộc về nhau\n" +
    "Em hãy cứ đi bên người mà em cần\n" +
    "Trái tim không thuộc về nhau\n" +
    "Giấc mơ không là của nhau\n" +
    "Xóa câu ca buồn chiều mưa\n" +
    "Anh lỡ xóa luôn yêu thương ngày xưa rồi\n" +
    "Chúng ta không thuộc về nhau\n" +
    "Chúng ta không thuộc về\n" +
    "Về về về nơi này\n" +
    "Chúng ta không thuộc về nhau\n" +
    "Chúng ta không thuộc về\n" +
    "Về về về nơi này\n" +
    "Chúng ta không thuộc về nhau\n" +
    "Không thuộc về nhau\n" +
    "Không thuộc về nhau\n" +
    "Chúng ta không thuộc về nhau\n" +
    "Không thuộc về nhau\n" +
    "Không thuộc về nhau\n" +
    "Chúng ta không thuộc về nhau\n" +
    "Chúng ta không thuộc về nhau\n" +
    "Chúng ta không thuộc về nhau\n" +
    "Em hãy cứ đi bên người mà em cần\n" +
    "Trái tim không thuộc về nhau\n" +
    "Giấc mơ không là của nhau\n" +
    "Xóa câu ca buồn chiều mưa\n" +
    "Anh lỡ xóa luôn yêu thương ngày xưa rồi\n" +
    "Chúng ta không thuộc về nhau\n" +
    "Chúng ta không thuộc về nhau\n" +
    "Chúng ta không thuộc về nhau\n" +
    "Chúng ta không thuộc về nhau\n" +
    "Chúng ta không thuộc về nhau\n" +
    "Chúng ta không thuộc về nhau"
}
