<template>
<div class="main-div">
  <link rel="stylesheet" href="/assets/css/components/student/YourCourses.css">
  <div>
      <div class="title justify-content-center d-flex">
          <p>შენი კურსები</p>
      </div>
      <div class=" justify-content-center d-flex align-items-center pt-5  ">
          <div>
            <button
              class="first-button  position-relative">
              <i class="fa-solid fa rectangle">მ</i>
                <span>
                  მათემატიკა
                </span>
                  <br>გაკვეთილი 1
              <img
                 class="arrow"
                 src="../../../../public/assets/media/arrow3.svg"
                 alt=""
              >
            </button>
          </div>
        <div class="d-flex justify-content-center align-items-center">
          <button
             class="second-button position-relative">
            <i class="fa-solid fa rectangle"
             id="second"
            >
              ქ
            </i>
              <span>
                ქართული
              </span>
                <br> გაკვეთილი 2
            <img
              class="arrow"
              src="../../../../public/assets/media/arrow3.svg"
              alt=""
            >
          </button>
        </div>
        <div class="d-flex justify-content-center align-items-center ">
            <button
              class="third-button position-relative">
              <i class="fa-solid fa rectangle "
               id="third"
              >
              ი
              </i>
                <span>
                  ინგლისური
                </span>
              <br> გაკვეთილი 3
                <img
                  class="arrow"
                  src="../../../../public/assets/media/arrow3.svg"
                  alt=""
                >
            </button>
        </div>
      </div>
    <div class="d-flex justify-content-center align-items-center pt-5 position-relative  ">
        <button class="buy-courses">
                შეიძინე კურსები
            <img
              class="vector"
              src="../../../../public/assets/media/lock.svg"
              alt=""
            >
        </button>
    </div>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {}
  },
  mounted(){
  }
}
</script>

