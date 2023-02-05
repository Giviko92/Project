<template>
    <div class="row justify-content-center m-0">
        <link rel="stylesheet" href="/assets/css/components/PaymentHistory.css">
        <div class="col-md-7">
            <div class=" justify-content-center d-flex">
                <div class="payment">
                    გადახდის ისტორია
                </div>
            </div>
            <div class="information pt-5  d-flex align-items-center">
                <div class="list row m-0 list w-100 row pt-3 m-0">
                    <div class="col-md-3  d-flex justify-content-center align-items-center">
                        სტატუსი
                    </div>
                    <div class="col-md-3 d-flex justify-content-center align-items-center">
                        თანხა
                    </div>
                    <div class="col-md-3 d-flex justify-content-center align-items-center">
                        დრო
                    </div>
                    <div class="col-md-3 d-flex justify-content-center align-items-center">
                        აღწერა
                    </div>
                    <div class="col-md-3 d-flex justify-content-center align-items-center">

                    </div>
                </div>
            </div>
            <div class="information">
                <div
                    :class="{
                        'second-list':!status.is_refundable,
                        'refund-list':status.is_refundable,
                    }"
                    class="row m-0 border-bottom position-relative"
                    v-for="status in statuses"
                >
                    <div class="position-absolute h-100 d-flex align-items-center ellipse-image">
                        <img
                            :src="`/assets/media/${status?.image}`"
                        >
                    </div>
                    <div
                        class="col-md-3 p-4 d-flex justify-content-center align-items-center"
                        v-text="status.status"
                    ></div>
                    <div
                        class="col-md-3 p-4 d-flex justify-content-center align-items-center"
                        v-text="status.price"
                    ></div>
                    <div
                        class="col-md-3 p-4 d-flex justify-content-center align-items-center"
                        v-text="status.date"
                    ></div>
                    <div
                        class="col-md-3 p-4 d-flex justify-content-center align-items-center"
                        v-text="status.description"
                    >
                    </div>
                    <div
                        v-if="status.is_refundable"
                        class="refund-div d-flex h-100 align-items-center position-absolute"
                    >
                        <button class="refund pt-2 pb-2">
                            Refund
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            statuses: [
                {
                    status: 'გაუქმებული',
                    price: '$120',
                    date: '28 მარტი 2023',
                    description: 'ქართულის კურსი',
                    image: 'ellipse.svg',
                    is_refundable: false
                },
                {
                    status: 'შესრულებული',
                    price: '$60',
                    date: '26 მარტი 2023',
                    description: 'მათემატიკის კურსი',
                    image: 'ellipse-green.svg',
                    is_refundable: false
                },
                {
                    status: 'გაგზავნილი',
                    price: '$30',
                    date: '18 მარტი 2023',
                    description: 'ბიოლოგიის კურსი',
                    image: 'ellipse-yellow.svg',
                    is_refundable: false
                },
                {
                    status: 'შესრულებული',
                    price: '$60',
                    date: '26 მარტი 2023',
                    description: 'ისტორიის კურსი',
                    image: 'ellipse-green.svg',
                    is_refundable: false
                },
                {
                    status: 'შესრულებული',
                    price: '$30',
                    date: '18 მარტი 2023',
                    description: 'PayPal',
                    image: 'ellipse-green.svg',
                    is_refundable: true
                }
            ],
        }
    },
    mounted() {
    }
}
</script>